
$(function() {
    var WIDTH = $(window).width();
    var HEIGHT = $(window).height();
    var FHeight = $('#footer').height();
    var btnH = $('#consultation').height();
    $('.infoPolicy').load('../layout/policy.html');
    $('.consultation').load('../layout/consultation.html');
    $('.nhnkcp_popup').load('../layout/nhnkcp_popup.html');//kcp 팝업추가
    if(WIDTH <= 428){
        $('#section3 .cell').css({'height':(HEIGHT-FHeight)+ 'px'});
    }
    $('#fullpage').fullpage({
        anchors: ['main', 'review', 'reason', 'client'],
        slidesNavigation: true,
        scrollOverflow: true,
        onLeave: function(index,destination){
            if(destination.index == 3){
                $('#consultation').stop(true).animate({'bottom':-btnH},400,function(){
                    $(this).css({'display': 'none'});
                });
            }else{
                $('#consultation').css({'display': 'block'}).stop(true).animate({'bottom':0},400);
            }
        }
    });
    //개인정보처리방침 pop
    $('#infoPolicy').on('click', function(){
        $('.infoPolicy').addClass('active').fadeIn(300);
        $('.dim').fadeIn(300);
    });
    
    //빠른상담문의 pop
    $('#consultation').on('click', function(){
        $(this).addClass('off').fadeOut(300);
        $('.consultation').addClass('active').css({'display': 'block'}).animate({'bottom':0},400);
        $('.dim').fadeIn(300);
    });
    
    //팝업 뒤 검정 음영처리
    var consulH = $('.consultation').height();
    $('.dim').on('click', function(){
        if($('.consultation').hasClass('active')){
            $('#consultation').removeClass('off').fadeIn(300);
            $(this).fadeOut(300);
            $('.consultation').removeClass('active').stop(true).animate({'bottom':-consulH},400,function(){
                $(this).css({'display': 'none'});
            });
            if($('.agreeBtn').hasClass('active')){
                $('.agreeBtn').removeClass('active');
                $('.agreeTxt').slideUp()
            }
            if($('#consultation').hasClass('off')){
                $('#consultation').removeClass('off').fadeIn(300);
            } 
        }
        if($('.infoPolicy').hasClass('active')){
            $('.infoPolicy').removeClass('active').fadeOut(300);
            $(this).fadeOut(300);
        }
        return false;
    });
    //클라이언트 로고 탭메뉴
    $('.tap_menu > li').on('click', function(){
        var activeTap = $(this).attr('data-tap');
        $(this).addClass('active').siblings().removeClass('active');
         $('#'+activeTap).addClass('active').siblings().removeClass('active');
    });
    $('.select > button').on('click',function(){
        $(this).parents('.select').find('ul.tap_menu').stop().slideToggle();
    });
});