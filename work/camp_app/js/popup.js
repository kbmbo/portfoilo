/////////////////////////////////////////////////////////////////////////////////////
//// 2020.05.19
//// 작성자 : 김보미
/////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $('.marsk-pop-btn').on('click',function(){
        var marskPopName = $(this).attr('data-name');
        $('.marsk-pop.'+marskPopName).load('/pages/popup/'+marskPopName+'.html').stop().fadeIn(500);
    });
    $('.pop-box button.close').on('click',function(){
        $('.b-marsk').stop().fadeOut(100);
    });
    // $('.openPopup').on('click',function(){
    //     var popName = $(this).attr('data-name');
    //     $('.popup.'+popName).load('/pages/popup/'+popName+'.html').stop().fadeIn(400);
    // });
    // $('button.popClose').on('click',function(){  
    //     $('.popup').stop().fadeOut(400); 
    // });
});
