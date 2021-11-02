////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// 2020.03.04
//// 작성자 : kspring
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    var windowHeight = $( window ).height();
    var topHeight = $('header').height();
    var navHeight = $('nav.bottom-menu').height();
    var menuHeight = topHeight+navHeight;
    var conTop = $('.content .con-top').height();
    var conHeight = "";
    
    if(navHeight == 0 || navHeight == null || navHeight == "undefined"){
            conHeight = windowHeight-topHeight;
    }else{
            conHeight = windowHeight-menuHeight;
    }
    $('.content').css({'height':conHeight , 'margin-top': topHeight});
    
    if(conTop == 0 || conTop == null || conTop == "undefined"){
        $('.content .con-box').css({'height': conHeight});
    }else{
        $('.content .con-box').css({'height': conHeight-conTop});
        $('.content > .main.active > .con-box').css({'height': conHeight});//페이지로드 개발 후 뺄것
    }

    $('nav.bottom-menu dl').on('click',function(){//페이지로드 개발 후 수정
        var tab_id = $(this).attr('data-tab');
        var conTop2 = $('.content > .active > .con-top').height();
        $(this).addClass('active').siblings().removeClass('active');
        $('.content > div > .con-box').css({'height': '0'});
        $("#"+tab_id).addClass('active').find('.con-box').css({'height': conHeight-conTop2});
        $("#"+tab_id).siblings().removeClass('active');
    });
    $('header > .logo').on('click',function(){
		$('nav.bottom-menu dl:first-child').addClass('active').siblings().removeClass('active');;
        $("#tab-1").addClass('active').siblings().removeClass('active');
        location.reload();
    });
    $('.con-top > ul.tap > li').on('click',function(){
		var tab_id_2 = $(this).attr('data-tab');
		$(this).addClass('active').siblings().removeClass('active');
        $("#"+tab_id_2).addClass('active').siblings().removeClass('active');
    });
    $('.con-top > .select > button').on('click',function(){
        $('.con-top > .select > ul.list').slideToggle();
        return false;
    });
    $('.con-top > .select > ul.list > li').on('click',function(){
        var text = $(this).text();
        $(this).addClass('active').siblings().removeClass('active');
        $('.con-top > .select > button').find('span').text(text);
        $('.con-top > .select > ul.list').slideToggle();
    });
    $('body').on('click',function(e){
        if(e.target.className ==".con-top > .select > ul.list"){return false}
        $('.con-top > .select > ul.list').slideUp();
    });
    $(".cat-menu").on('click',function(){
        $(".left-menu,html").addClass("open");
        $("#top-btn").css({'display': 'none'});
        window.location.hash = "#open";
    });
      
    window.onhashchange = function() {
        if (location.hash != "#open") {
          $(".left-menu,html").removeClass("open");
          $("#top-btn").css({'display': 'block'});
        }
    };

    $(".cat-list > li").on('click',function(){
        var catName = $(this).attr('data-name');
        location.href= '/portfoilo/work/pointgrab/pages/category/'+catName+'.html';
    });
});