////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// 네이티브 공통스크립트
//// 2020.03.02
//// 작성자 : kspring
//// 한글깨짐문제 있음 인코딩 unicode 인지 확인할것
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function native_script_type0(){  //////컨텐츠박스 웹 
    $(document).ready(function(){
        wp_json = wp_json.replace(/\r/gi, '');
        wp_json = wp_json.replace(/\n/gi, '');
        wp_json = wp_json.replace(/\t/gi, '');
        wp_json = wp_json.replace(/\f/gi, '');
        wp_json = wp_json.replace(/\\/g, '');
        var newJ = $.parseJSON(wp_json);

        var layout_total = $(".con_box").length;
        var content_total_num = newJ.client.data[0].contents.length;

        if(content_total_num < layout_total) {
            $('#main_box').remove();
            $('#main_box_last').css({'display' : 'block'});
            $("#main_box_last").find('.thumb').css({'background-size' : 'cover'});
            $('.tit').text('당신에게 추천하는 콘텐츠');
        } else if(content_total_num >= layout_total) {
            $('#main_box').css({'display' : 'block'});
            $('#main_box_last').remove();
            if(typeof isAdView === 'undefined') isAdView = true; 
            if(typeof nativePvView !== 'undefined') nativePvView(scriptNo, adGubun, isAdView);
            if(titleNm != null && typeof titleNm != "undefined"){
                $('.tit').text(titleNm);	
            }
        }

        var isCps = typeof $('.cps').html() !== 'undefined';

        //기사
        $.each(newJ.client.data[0].contents,function(i,obj){
            var parserObjCtext = "";
            if(typeof obj.cText == "object") {
            	parserObjCtext = obj.cText[0].replace(/&quot;/g, '"');
            } else {
            	parserObjCtext = obj.cText.replace(/&quot;/g, '"');
            }
            parserObjCtext = parserObjCtext.replace(/&apos;/g, "'");
            parserObjCtext = parserObjCtext.replace(/&amp;quot;/g, '"');
            parserObjCtext = parserObjCtext.replace(/&#39;/g, "'");
            parserObjCtext = parserObjCtext.replace(/&#34;/g, '"');
            parserObjCtext = parserObjCtext.replace(/&#039;/g, "'");
            parserObjCtext = parserObjCtext.replace(/&#034;/g, '"');
            parserObjCtext = parserObjCtext.replace(/&lt;/g, '<');
            parserObjCtext = parserObjCtext.replace(/&gt;/g, '>');
            parserObjCtext = parserObjCtext.replace(/&amp;/g, '&');
            parserObjCtext = parserObjCtext.replace(/^\?+/, '');

            if(obj.adGubun == "AD") {
                $(".obj"+i+"_cUrl").removeAttr("onclick");
                $(".obj"+i+"_cUrl").addClass('mark').click(function(){
                    if(typeof obj.subAdGubun !== 'undefined' && obj.subAdGubun !== 'NL') {
						mobWindowOpen(obj.cUrl);void(0);
					} else {
						window.open(obj.cUrl,'_blank');void(0);	
					}
                });
            } else if(obj.adGubun == "NAD") {
                $(".obj"+i+"_cUrl").addClass('mark-' + obj.newsType).click(function(){
					nonAdClickData(obj._id, obj.newsType);
                    if(isCps){
                        window.open(obj.cUrl,'_blank');void(0);
                    }else{
                        window.open(obj.cUrl,'_top');void(0);
                    }
                });
            }
            $(".obj"+i+"_cText").text(parserObjCtext);
            $(".obj"+i+"_sName").text(obj.site_name);
            if(obj.cImgUrl == "" || obj.cImgUrl == null || typeof obj.cImgUrl == "undefined") {
                $(".obj"+i+"_cImgUrl").closest('.thumb').find('.loading').css({'display' : 'block'});
                $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : 'none'});
                $(".obj"+i+"_cImgUrl").attr('src','//img.mobon.net/mediaCategory/newAd/img/transparency.png');
            } else {
                $(".obj"+i+"_cImgUrl").attr('src',obj.cImgUrl);
                if (obj.imageSqreYn == "Y") {
                    $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'contain'});
                }else {
                    $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'cover'});
                }
                $(".obj"+i+"_cImgUrl").on('error', function(){
                    $(this).closest('.thumb').find('.loading').css({'display' : 'block'});
                    $(this).closest('.thumb').css({'background-image' : 'none'});
                    $(this).attr('onError','this.onError=null;this.src="//img.mobon.net/mediaCategory/newAd/img/transparency.png"');
                    $(this).attr('src','//img.mobon.net/mediaCategory/newAd/img/transparency.png');
                });
            }
        });
    });
}

function native_script_type1(){  //////컨텐츠박스 모바일    

    $(document).ready(function(){
        wp_json = wp_json.replace(/\r/gi, '');
        wp_json = wp_json.replace(/\n/gi, '');
        wp_json = wp_json.replace(/\t/gi, '');
        wp_json = wp_json.replace(/\f/gi, '');
        wp_json = wp_json.replace(/\\/g, '');
        var newJ = $.parseJSON(wp_json);

        var layout_total = $(".con_box").length;
        var content_total_num = newJ.client.data[0].contents.length;

        if(content_total_num < layout_total) {
            $('#main_box').remove();
            $('#main_box_last').css({'display' : 'block'});
            $("#main_box_last").find('.thumb').css({'background-size' : 'cover'});
            $('.tit').text('당신에게 추천하는 콘텐츠');
        } else if(content_total_num >= layout_total) {
            $('#main_box').css({'display' : 'block'});
            $('#main_box_last').remove();
            if(typeof isAdView === 'undefined') isAdView = true;
            if(typeof nativePvView !== 'undefined') nativePvView(scriptNo, adGubun, isAdView);
            if(titleNm != null && typeof titleNm != "undefined"){
                $('.tit').text(titleNm);	
            }
        }

        //기사
        $.each(newJ.client.data[0].contents,function(i,obj){
        	var parserObjCtext = "";
            if(typeof obj.cText == "object") {
            	parserObjCtext = obj.cText[0].replace(/&quot;/g, '"');
            } else {
            	parserObjCtext = obj.cText.replace(/&quot;/g, '"');
            }
            parserObjCtext = parserObjCtext.replace(/&apos;/g, "'");
            parserObjCtext = parserObjCtext.replace(/&amp;quot;/g, '"');
            parserObjCtext = parserObjCtext.replace(/&#39;/g, "'");
            parserObjCtext = parserObjCtext.replace(/&#34;/g, '"');
            parserObjCtext = parserObjCtext.replace(/&#039;/g, "'");
            parserObjCtext = parserObjCtext.replace(/&#034;/g, '"');
            parserObjCtext = parserObjCtext.replace(/&lt;/g, '<');
            parserObjCtext = parserObjCtext.replace(/&gt;/g, '>');
            parserObjCtext = parserObjCtext.replace(/&amp;/g, '&');
            parserObjCtext = parserObjCtext.replace(/^\?+/, '');

            if(obj.adGubun == "AD") {
                $(".obj"+i+"_cUrl").removeAttr("onclick");
                $(".obj"+i+"_cUrl").addClass('mark').click(function(){
                    if(typeof obj.subAdGubun !== 'undefined' && obj.subAdGubun !== 'NL') {
						mobWindowOpen(obj.cUrl);void(0);
					} else {
						window.open(obj.cUrl,'_blank');void(0);	
					}
                });
            } else if(obj.adGubun == "NAD") {
                $(".obj"+i+"_cUrl").addClass('mark-' + obj.newsType).click(function(){
					nonAdClickData(obj._id, obj.newsType);
                    window.open(obj.cUrl,'_top');void(0);
                });
            }
            $(".obj"+i+"_cText").text(parserObjCtext);
            $(".obj"+i+"_sName").text(obj.site_name);
            if(obj.cImgUrl == "" || obj.cImgUrl == null || typeof obj.cImgUrl == "undefined"){
                $(".obj"+i+"_cImgUrl").closest('.thumb').find('.loading').css({'display' : 'block'});
                $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : 'none'});
                $(".obj"+i+"_cImgUrl").attr('src','//img.mobon.net/mediaCategory/newAd/img/transparency.png');
            } else{
                $(".obj"+i+"_cImgUrl").attr('src',obj.cImgUrl);
                if (obj.imageSqreYn == "Y") {
                    $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'contain'});
                }else {
                    $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'cover'});
                }
                $(".obj"+i+"_cImgUrl").on('error', function(){
                    $(this).closest('.thumb').find('.loading').css({'display' : 'block'});
                    $(this).closest('.thumb').css({'background-image' : 'none'});
                    $(this).attr('onError','this.onError=null;this.src="//img.mobon.net/mediaCategory/newAd/img/transparency.png"');
                    $(this).attr('src','//img.mobon.net/mediaCategory/newAd/img/transparency.png');
                });
            }
        });                
    });
}

function native_script_type2(layoutMin){  //////홈픽 모바일
    
    $(document).ready(function(){
        wp_json = wp_json.replace(/\r/gi, '');
        wp_json = wp_json.replace(/\n/gi, '');
        wp_json = wp_json.replace(/\t/gi, '');
        wp_json = wp_json.replace(/\f/gi, '');
        wp_json = wp_json.replace(/\\/g, '');
        var newJ = $.parseJSON(wp_json);

        var objNewJLength = Object.keys(newJ.client.data[0].contents).length;
        if(objNewJLength == null || objNewJLength < layoutMin){
			if(mediaMainUrl != null && typeof(mediaMainUrl) != 'undefind') {
				parent.location.replace(mediaMainUrl);void(0);		
			} else {
				parent.history.go(-1);
				parent.history.go(-1);
			}
        }
        
        $('.tit').text(titleNm);
        if(mediaLogoImage == "" || mediaLogoImage == null){
            $('.logo').remove();                    
        } else {
            $('.logo').html('<img src="'+mediaLogoImage+'" onError="" alt="" />').closest('.logo').css({'background-image' : "url('"+mediaLogoImage+"')", 'background-size' : 'contain'}).find('img').css({'display' : 'none'});
            $(".logo img").on('error', function () {
                $(this).closest('.logo').remove();
            });
        }
        
        //기사
        $("li[class*='_cUrl']").hide(); // 모든 영역 hide 처리
        
        if(typeof nativePvView !== 'undefined') nativePvView(scriptNo, adGubun, true);
        
        $.each(newJ.client.data[0].contents,function(i,obj){
            if(obj.adGubun != "" && obj.cText != "" && obj.cUrl != ""){
            	var parserObjCtext = "";
                if(typeof obj.cText == "object") {
                	parserObjCtext = obj.cText[0].replace(/&quot;/g, '"');
                } else {
                	parserObjCtext = obj.cText.replace(/&quot;/g, '"');
                }
                parserObjCtext = parserObjCtext.replace(/&apos;/g, "'");
                parserObjCtext = parserObjCtext.replace(/&amp;quot;/g, '"');
                parserObjCtext = parserObjCtext.replace(/&#39;/g, "'");
                parserObjCtext = parserObjCtext.replace(/&#34;/g, '"');
                parserObjCtext = parserObjCtext.replace(/&#039;/g, "'");
                parserObjCtext = parserObjCtext.replace(/&#034;/g, '"');
                parserObjCtext = parserObjCtext.replace(/&lt;/g, '<');
                parserObjCtext = parserObjCtext.replace(/&gt;/g, '>');
                parserObjCtext = parserObjCtext.replace(/&amp;/g, '&');
                parserObjCtext = parserObjCtext.replace(/^\?+/, '');
                
                if(obj.adGubun == "AD") {
                    $(".obj"+i+"_cUrl").removeAttr("onclick");
                    $(".obj"+i+"_cUrl").addClass('mark').click(function(){
                        if(typeof obj.subAdGubun !== 'undefined' && obj.subAdGubun !== 'NL') {
                            mobWindowOpen(obj.cUrl);void(0);
                        } else {
                            window.open(obj.cUrl,'_blank');void(0);	
                        }
                    });
                } else if(obj.adGubun == "NAD") {
                    $(".obj"+i+"_cUrl").addClass('mark-' + obj.newsType).click(function(){
						nonAdClickData(obj._id, obj.newsType);
                        parent.location.replace(obj.cUrl);void(0);
                    });
                }
                $(".obj"+i+"_cText").text(parserObjCtext);
                $(".obj"+i+"_sName").text(obj.site_name);
                if(obj.cImgUrl == "" || obj.cImgUrl == null || typeof obj.cImgUrl == "undefined"){
                    $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : "url('"+obj.errorUrl+"')", 'background-size' : 'contain'});
                    if(obj.errorUrl == "" || obj.errorUrl == null || typeof obj.errorUrl == "undefined"){
                        $(".obj"+i+"_cImgUrl").closest('.thumb').find('.loading').css({'display' : 'block'});
                        $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : 'none'});
                        $(".obj"+i+"_cImgUrl").attr('src','//img.mobon.net/mediaCategory/newAd/img/transparency.png');
                    }
                    
                } else{
                    $(".obj"+i+"_cImgUrl").attr('src',obj.cImgUrl);
                    if (obj.imageSqreYn == "Y") {
                        $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'contain'});
                    }else {
                        $(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'cover'});
                    }
                    $(".obj"+i+"_cImgUrl").on('error', function(){
                        $(this).closest('.thumb').css({'background-image' : "url('"+obj.errorUrl+"')", 'background-size' : 'contain'});
                        if(obj.errorUrl == "" || obj.errorUrl == null || typeof obj.errorUrl == "undefined"){
                            $(this).closest('.thumb').find('.loading').css({'display' : 'block'});
                            $(this).closest('.thumb').css({'background-image' : 'none'});
                            $(this).attr('src','//img.mobon.net/mediaCategory/newAd/img/transparency.png');
                        }
                    });
                }
                $(".obj"+i+"_cUrl").show();
            } else {
                $(".obj"+i+"_cUrl").hide();
            }
        });
    });
}

function native_script_type3(){  ////// AI아나운서 
    $(document).ready(function(){
        wp_json = wp_json.replace(/\r/gi, '');
        wp_json = wp_json.replace(/\n/gi, '');
        wp_json = wp_json.replace(/\t/gi, '');
        wp_json = wp_json.replace(/\f/gi, '');
        wp_json = wp_json.replace(/\\/g, '');
        var newJ = $.parseJSON(wp_json);

        if(typeof isAdView === 'undefined') isAdView = true; 
        if(typeof nativePvView !== 'undefined') nativePvView(scriptNo, adGubun, isAdView);

        //기사
        $.each(newJ.client.data[0].contents,function(i,obj){
        	var parserObjCtext = "";
            if(typeof obj.cText == "object") {
            	parserObjCtext = obj.cText[0].replace(/&quot;/g, '"');
            } else {
            	parserObjCtext = obj.cText.replace(/&quot;/g, '"');
            }
            parserObjCtext = parserObjCtext.replace(/&apos;/g, "'");
            parserObjCtext = parserObjCtext.replace(/&amp;quot;/g, '"');
            parserObjCtext = parserObjCtext.replace(/&#39;/g, "'");
            parserObjCtext = parserObjCtext.replace(/&#34;/g, '"');
            parserObjCtext = parserObjCtext.replace(/&#039;/g, "'");
            parserObjCtext = parserObjCtext.replace(/&#034;/g, '"');
            parserObjCtext = parserObjCtext.replace(/&lt;/g, '<');
            parserObjCtext = parserObjCtext.replace(/&gt;/g, '>');
            parserObjCtext = parserObjCtext.replace(/&amp;/g, '&');
            parserObjCtext = parserObjCtext.replace(/^\?+/, '');

            if(obj.adGubun == "AD") {
                $(".obj"+i+"_img").removeAttr("onclick");
                $(".obj"+i+"_img").addClass('mark').click(function(){
                    if(typeof obj.subAdGubun !== 'undefined' && obj.subAdGubun !== 'NL') {
                        mobWindowOpen(obj.cUrl);void(0);
                    } else {
                        window.open(obj.cUrl,'_blank');void(0);	
                    }
                });
            } else if(obj.adGubun == "NAD") {
                $(".obj"+i+"_img").addClass('mark-' + obj.newsType).click(function(){
					nonAdClickData(obj._id, obj.newsType);
                    window.open(obj.cUrl,'_top');void(0);
                });
            }
            $(".obj"+i+"_text").text(parserObjCtext);
            
            if (obj.imageSqreYn == "Y") {
                $(".obj"+i+"_img").css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'contain'});
            }else {
                $(".obj"+i+"_img").css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'cover'});
            }
            
            if(obj.adGubun == "AD") {
            	$(".obj"+i+"_img").parent().remove();
            }
        });
    });
}

function native_script_type4(){  ////// AI아나운서 
    $(document).ready(function(){
        wp_json = wp_json.replace(/\r/gi, '');
        wp_json = wp_json.replace(/\n/gi, '');
        wp_json = wp_json.replace(/\t/gi, '');
        wp_json = wp_json.replace(/\f/gi, '');
        wp_json = wp_json.replace(/\\/g, '');
        var newJ = $.parseJSON(wp_json);

        if(typeof isAdView === 'undefined') isAdView = true; 
        if(typeof nativePvView !== 'undefined') nativePvView(scriptNo, adGubun, isAdView);

        //기사
        $.each(newJ.client.data[0].contents,function(i,obj){
        	if(obj.adGubun == "NAD") {
				if(i != 0){ i--; }
				var parserObjCtext = "";
	            if(typeof obj.cText == "object") {
	            	parserObjCtext = obj.cText[0].replace(/&quot;/g, '"');
	            } else {
	            	parserObjCtext = obj.cText.replace(/&quot;/g, '"');
	            }
                parserObjCtext = parserObjCtext.replace(/&apos;/g, "'");
                parserObjCtext = parserObjCtext.replace(/&amp;quot;/g, '"');
                parserObjCtext = parserObjCtext.replace(/&#39;/g, "'");
                parserObjCtext = parserObjCtext.replace(/&#34;/g, '"');
                parserObjCtext = parserObjCtext.replace(/&#039;/g, "'");
                parserObjCtext = parserObjCtext.replace(/&#034;/g, '"');
                parserObjCtext = parserObjCtext.replace(/&lt;/g, '<');
                parserObjCtext = parserObjCtext.replace(/&gt;/g, '>');
                parserObjCtext = parserObjCtext.replace(/&amp;/g, '&');
                parserObjCtext = parserObjCtext.replace(/^\?+/, '');

                if (obj.imageSqreYn == "Y") {
                    $(".obj"+i+"_img").css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'contain'});
                }else {
                    $(".obj"+i+"_img").css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'cover'});
                }
                
                var $round = $('.round'),
                roundRadius = $round.find('circle').attr('r'),
                roundPercent = $round.data('percent'),
                roundCircum = 2 * roundRadius * Math.PI,
                roundDraw = roundPercent * roundCircum / 90
                if(navigator.userAgent.indexOf('MSIE') > 0 || navigator.userAgent.indexOf('Trident') > 0){
                    var i = 0;
                    var repeat = setInterval(function(){
                        $('.round').css('stroke-dasharray', i  + ', 999');
                        i = i+3;
                        console.log(i);
                        if(i > 249){
                        	clearInterval(repeat);
							nonAdClickData(obj._id, obj.newsType);
	                        window.open(obj.cUrl,'_top');void(0);
                        }
                    },50)
                }else{
                    $('.round').css('stroke-dasharray', roundDraw  + ' 999');
                    
                    var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';
        	        
        	        $('.round').one(transitionEnd, function(){
						nonAdClickData(obj._id, obj.newsType);
                        window.open(obj.cUrl,'_top');void(0);
        	        });
                }
            }
        });

    });
}

function native_script_type5(){  //////컨텐츠박스 모바일  중앙일보
	wp_json = wp_json.replace(/\r/gi, '');
	wp_json = wp_json.replace(/\n/gi, '');
	wp_json = wp_json.replace(/\t/gi, '');
	wp_json = wp_json.replace(/\f/gi, '');
	wp_json = wp_json.replace(/\\/g, '');
	var newJ = $.parseJSON(wp_json);
	
	if(wp_json.indexOf('"adGubun":"NAD"') == "-1"){
		newJ.client.data[0].contents.splice(2,3);
		newJ.client.data[0].contents.unshift({adGubun: "NAD", cImgUrl: "https://pds.joins.com/news/component/htmlphoto_mmdata/202012/15/e40f8efe-fea2-4960-9974-f41dc936a309.jpg", cText: "위메프도 뛰어든 신선식품 경쟁… 선주문 후생산", cUrl: "https://mnews.joins.com/article/23945988", errorUrl: "", imageSqreYn: "N", nativeFrame: "", newsType: "LA", _id: "4589bee6307d6f525dd86c42db0e2bf2"});
		newJ.client.data[0].contents.unshift({adGubun: "NAD", cImgUrl: "https://pds.joins.com/news/component/htmlphoto_mmdata/202012/15/cd7ccb29-1431-4671-96f5-9f96b7d8608e.jpg", cText: "기억에 남을 모습...마스크 쓴 우승자 김아림 향한 외신들의 찬사", cUrl: "https://mnews.joins.com/article/23945980", errorUrl: "", imageSqreYn: "N", nativeFrame: "", newsType: "LA", _id: "024d423c5753ae2b83b244e5bda443cf"});
		newJ.client.data[0].contents.unshift({adGubun: "NAD", cImgUrl: "https://pds.joins.com/news/component/htmlphoto_mmdata/202012/15/d67386d3-913c-421d-a474-fd05bc115ed2.jpg", cText: "尹 징계위 두 번째 날, 코드는 ‘말’…이성윤·정진웅 증인 불출석", cUrl: "https://mnews.joins.com/article/23945985", errorUrl: "", imageSqreYn: "N", nativeFrame: "", newsType: "LA", _id: "4bfe4f937109b13c9177ec20b4dc1009"});
	}
	
	var layout_total = $(".con_box").length;
	var content_total_num = newJ.client.data[0].contents.length;

	if(content_total_num < layout_total) {
		$('#main_box').remove();
		$('#main_box_last').css({'display' : 'block'});
		$("#main_box_last").find('.thumb').css({'background-size' : 'cover'});
		$('.tit').text('당신에게 추천하는 콘텐츠');
	} else if(content_total_num >= layout_total) {
		$('#main_box').css({'display' : 'block'});
		$('#main_box_last').remove();
		if(typeof isAdView === 'undefined') isAdView = true;
		if(typeof nativePvView !== 'undefined') nativePvView(scriptNo, adGubun, isAdView);
		if(titleNm != null && typeof titleNm != "undefined"){
			$('.tit').text(titleNm);	
		}
	}

	//기사
	$.each(newJ.client.data[0].contents,function(i,obj){
		var parserObjCtext = "";
		if(typeof obj.cText == "object") {
			parserObjCtext = obj.cText[0].replace(/&quot;/g, '"');
		} else {
			parserObjCtext = obj.cText.replace(/&quot;/g, '"');
		}
		parserObjCtext = parserObjCtext.replace(/&apos;/g, "'");
		parserObjCtext = parserObjCtext.replace(/&amp;quot;/g, '"');
		parserObjCtext = parserObjCtext.replace(/&#39;/g, "'");
		parserObjCtext = parserObjCtext.replace(/&#34;/g, '"');
		parserObjCtext = parserObjCtext.replace(/&#039;/g, "'");
		parserObjCtext = parserObjCtext.replace(/&#034;/g, '"');
		parserObjCtext = parserObjCtext.replace(/&lt;/g, '<');
		parserObjCtext = parserObjCtext.replace(/&gt;/g, '>');
		parserObjCtext = parserObjCtext.replace(/&amp;/g, '&');
		parserObjCtext = parserObjCtext.replace(/^\?+/, '');

		if(obj.adGubun == "AD") {
			$(".obj"+i+"_cUrl").removeAttr("onclick");
			$(".obj"+i+"_cUrl").addClass('mark').click(function(){
				if(typeof obj.subAdGubun !== 'undefined' && obj.subAdGubun !== 'NL') {
					mobWindowOpen(obj.cUrl);void(0);
				} else {
					window.open(obj.cUrl,'_blank');void(0);	
				}
			});
		} else if(obj.adGubun == "NAD") {
			$(".obj"+i+"_cUrl").addClass('mark-' + obj.newsType).click(function(){
				nonAdClickData(obj._id, obj.newsType);
				window.open(obj.cUrl,'_top');void(0);
			});
		}
		$(".obj"+i+"_cText").text(parserObjCtext);
		$(".obj"+i+"_sName").text(obj.site_name);
		if(obj.cImgUrl == "" || obj.cImgUrl == null || typeof obj.cImgUrl == "undefined"){
			$(".obj"+i+"_cImgUrl").closest('.thumb').find('.loading').css({'display' : 'block'});
			$(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : 'none'});
			$(".obj"+i+"_cImgUrl").attr('src','//img.mobon.net/mediaCategory/newAd/img/transparency.png');
		} else{
			$(".obj"+i+"_cImgUrl").attr('src',obj.cImgUrl);
			if (obj.imageSqreYn == "Y") {
				$(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'contain'});
			}else {
				$(".obj"+i+"_cImgUrl").closest('.thumb').css({'background-image' : "url('"+obj.cImgUrl+"')", 'background-size' : 'cover'});
			}
			$(".obj"+i+"_cImgUrl").on('error', function(){
				$(this).closest('.thumb').find('.loading').css({'display' : 'block'});
				$(this).closest('.thumb').css({'background-image' : 'none'});
				$(this).attr('onError','this.onError=null;this.src="//img.mobon.net/mediaCategory/newAd/img/transparency.png"');
				$(this).attr('src','//img.mobon.net/mediaCategory/newAd/img/transparency.png');
			});
		}
	});                
}
//이미지가 cover인 경우
// function img_width(){
//     $(".thumb").find(".img").on("load",function(){
//         var imgW = $(this).width();
//         var imgH = $(this).height();
//         var divW = $(this).parent().width();
//         var divH = $(this).parent().height();
//         var divRateY = divW/divH;
//         var divRateX = divH/divW;
//         var imgRateY = imgW/imgH;
//         var imgRateX = imgH/imgW;
//         var gapH = (imgH*(divW/imgW) - divH)*0.5;
//         var gapW = (imgW*(divH/imgH) - divW)*0.5;

//         if(divW <= divH) {
//             if(imgRateY <= divRateY) {
//                 $(this).css({"width":"100%","margin-top":"-"+gapH +"px"});
//             }else{
//                 $(this).css({"height":"100%","margin-left":"-"+gapW +"px"});
//             }
//         }else{
//             if(imgRateX <= divRateX) {
//                 $(this).css({"height":"100%","margin-left":"-"+gapW +"px"});
//             }else{
//                 $(this).css({"width":"100%","margin-top":"-"+gapH +"px"});
//             }
//         }
//     });                    
// }
// img_width();
///////////////////////////////////////////////////////////////////////////////////
//이미지가 contain인 경우 
// function img_height(){
//     $(".thumb").find(".img").on("load",function(){
//         var imgW = $(this).width();
//         var imgH = $(this).height();
//         var divW = $(this).parent().width();
//         var divH = $(this).parent().height();
//         var divRateY = divW/divH;
//         var divRateX = divH/divW;
//         var imgRateY = imgW/imgH;
//         var imgRateX = imgH/imgW;
//         var gapH = (divH-(imgH*(divW/imgW)))*0.5;
//         var gapW = (divW-(imgW*(divH/imgH)))*0.5;

//         if(divW <= divH) {
//             if(imgRateY <= divRateY) {
//                 $(this).css({"height":"100%","margin-left":gapW +"px"});
//             }else{
//                 $(this).css({"width":"100%","margin-top":gapH +"px"});
//             }
//         }else{
//             if(imgRateX <= divRateX) {
//                 $(this).css({"width":"100%","margin-top":gapH +"px"});
//             }else{
//                 $(this).css({"height":"100%","margin-left":gapW +"px"});
//             }
//         }
//     });                    
// }
// img_height();
