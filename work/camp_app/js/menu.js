////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// 2020.04.28
//// 작성자 : 김보미
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    var windowHeight = $( window ).height();
    var topHeight = $('header').height();
    var navHeight = $('nav').height();
    var bottomBtn = $('button.bottom').height();
    var menuHeight = topHeight+navHeight;
    var conHeight = "";
    
    if(navHeight == 0 || navHeight == null || navHeight == "undefined"){
            conHeight = windowHeight-(topHeight+bottomBtn);
            $('.content').css({'height':conHeight , 'margin-top': topHeight});
    } else if(bottomBtn == 0 || bottomBtn == null || bottomBtn == "undefined"){
        conHeight = windowHeight-menuHeight;
        $('.content').css({'height':conHeight , 'margin-top': menuHeight});
    } else if(topHeight == 0 || topHeight == null || topHeight == "undefined"){
        conHeight = windowHeight-(navHeight+bottomBtn);
        $('.content').css({'height':conHeight , 'margin-top': navHeight});
    } else if((navHeight == 0 || navHeight == null || navHeight == "undefined")&&(bottomBtn == 0 || bottomBtn == null || bottomBtn == "undefined")){
        conHeight = windowHeight-topHeight;
        $('.content').css({'height':conHeight , 'margin-top': topHeight});
    }
    $('.tag').on( 'keyup', 'textarea', function (e){
        $(this).css('height', 'auto' );
        $(this).height( this.scrollHeight );
      });
      $('.tag').find( 'textarea' ).keyup();
});