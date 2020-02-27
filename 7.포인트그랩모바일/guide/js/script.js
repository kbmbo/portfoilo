$(function(){


	if ( $('body').hasClass('container-full') ) {
		$('body').parent('html').css('height','100%');
	} else {
		$('body').parent('html').css('height','auto');
	}

	var page_detail = $('.detail-camp');

	/*if( page_detail < 1 ) {
		$('html').addClass('ddd')
	}*/

	
	var inputID = $('.input-id'),
		inputPw = $('.input-pw');

	inputID.keyup(function(){
		var txt = $(this).val();
		if ( txt.length >= 1) {
			inputID.addClass('on');
		} else {
			inputID.removeClass('on');
		}
	});
	inputPw.keyup(function(){
		var txt = $(this).val();
		if ( txt.length >= 1) {
			inputPw.addClass('on');
		} else {
			inputPw.removeClass('on');
		}
	});

	$('.input-text .txtinput').focus(function(){
		$(this).parent().addClass('on');
	});
	$('.input-text .txtinput').focusout(function(){
		$(this).parent().removeClass('on');
	});

	// select box
	var select = $("select");
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
	});

	//POPUP
	$('.btn-layerPop').each(function(){
		var $self = $(this);
		var datatype = $self.attr('data-type');

		$self.click(function(){
			// 캠페인 검토 신청
			if ( datatype == 'popup_campRegi' ) {
				$('.layer-campRegi').fadeIn(200);
			}

			// 캠페인 착수금 결제
			if ( datatype == 'popup_campPay' ) {
				$('.layer-campPay').fadeIn(200);
			}

			// 캠페인 잔금 결제
			if ( datatype == 'popup_campPay2' ) {
				$('.layer-campPay2').fadeIn(200);
			}

			// 담당자 배정
			if ( datatype == 'popup_manager' ) {
				$('.layer-manger').fadeIn(200);
			}

			// 인플루언서 등록
			if ( datatype == 'popup_influencerRegi' ) {
				$('.layer-influencer').fadeIn(200);
			}

			// 광고비 입금 확인
			if ( datatype == 'popup_adFee' ) {
				$('.layer-adFee').fadeIn(200);
			}

			// 정산확인
			if ( datatype == 'popup_cal' ) {
				$('.layer-cal').fadeIn(200);
			}

			// 알러트 팝업 확인, 취소
			if ( datatype == 'alert_p_confirm' ) {
				$('.layer-alert-confirm').fadeIn(200);
			}

			$('body').append('<div class="dim"></div>');
			$('.dim').fadeIn(300);
			var dim = $('body').find('.dim');
			dim.click(function(){
				$('.layer-popup').fadeOut(100);
				$(this).fadeOut(300).remove();
			});

			var btnClose = $('.layer-popup .area-btn .btn-cancel');
			btnClose.click(function(){
				$('.layer-popup').fadeOut(100);
				dim.fadeOut(300).remove();
			});

			var btnClose_x = $('.layer-popup .area-title .btn-close');
			btnClose_x.click(function(){
				$('.layer-popup').fadeOut(100);
				dim.fadeOut(300).remove();
			});
		});
	});

	// tooltip
	$('.area-tooltips .btn-tooltip-tel').mouseenter(function(){
		$('.area-tooltips .tooltip.tel').fadeIn(300);
	}).mouseleave(function(){
		$('.area-tooltips .tooltip.tel').fadeOut(300);
	});

	$('.area-tooltips .btn-tooltip-mail').mouseenter(function(){
		$('.area-tooltips .tooltip.mail').fadeIn(300);
	}).mouseleave(function(){
		$('.area-tooltips .tooltip.mail').fadeOut(300);
	});

	$('.influencer-list .info-box .tooltip-box i').mouseenter(function(){
		$('.influencer-list .info-box .tooltip-box .tooltip').fadeIn(300);
	}).mouseleave(function(){
		$('.influencer-list .info-box .tooltip-box .tooltip').fadeOut(300);
	});

	$('.form-datepick').each(function(){
		$(this).datepicker({
			dateFormat: "yy-mm-dd",
		});
	});

	$('.form-datepick-day').each(function(){
		$(this).datepicker({
			dateFormat: "mm-dd",
		});
	});

	$('.upload-hidden').on('change', function(){ // 값이 변경되면
		if(window.FileReader){ // modern browser
			var filename = $(this)[0].files[0].name;
		} else { // old IE
			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
		}
		// 추출한 파일명 삽입
		$(this).parent().siblings('.upload-name').val(filename);
	});

	//$('.irs-single').append('<div class="">12</div>');

});

function increaseValue() {
	var value = parseInt(document.getElementById('number').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('number').value = value;
}

function decreaseValue() {
	var value = parseInt(document.getElementById('number').value, 10);
	value = isNaN(value) ? 0 : value;
	value < 1 ? value = 1 : '';
	value--;
	document.getElementById('number').value = value;
}
