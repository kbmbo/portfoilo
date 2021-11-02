/////////////////////////////////////////////////////////////////////////////////////
//// 2020.03.05
//// 작성자 : kspring
/////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $('.openPopup').on('click',function(){
        var popName = $(this).parents().children('.popup').attr('data-name');
        $(this).parents().children('.popup').load('/portfoilo/work/pointgrab/pages/popup/'+popName+'.html').stop().fadeIn(500);
    });
    $('button.popClose').on('click',function(){  
        $('.popup').stop().fadeOut(500); 
    });
    
    $('.marsk-pop-btn').on('click',function(){
        var marskPopName = $('.marsk-pop').attr('data-name');
        $('.marsk-pop').load('/portfoilo/work/pointgrab/pages/popup/'+marskPopName+'.html').stop().fadeIn(500);
    });
    $('.b-marsk.close').on('click',function(){
        $('.marsk-pop-btn').addClass('active');
        $(this).stop().fadeOut(100);
    });
    $('.marsk-pop .cancel').on('click',function(){
        $('.b-marsk').stop().fadeOut(100);
    });
});
