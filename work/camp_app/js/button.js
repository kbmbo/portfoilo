////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// 2020.05.20
//// 작성자 : 김보미
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#Allagree").on('click',function(){
        if($("#Allagree").is(":checked")){
            $(".chk").prop("checked",true);
        } else{
            $(".chk").prop("checked",false);
        }
    });
    $('.feed-type-list button').on('click',function(){
        if($(this).hasClass('on')){
            $(location).attr('href','/pages/enrollment-1.html');
        }else if($(this).hasClass('off')){
            $(this).removeClass('off').addClass('on')
        }
    });
    $(".chk").on('click',function(){
        if($("input[name='agree']:checked").length===2){
            $("#Allagree").prop("checked",true);
        } else{
            $("#Allagree").prop("checked",false);
        }
    });
    $('.feed-type > li').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.month > li').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.select > button').on('click',function(){
        $('.select > ul.list').slideUp();
        $(this).parents('.select').find('ul.list').slideToggle();
        var offset = $(this).parents('.select').find('ul.list > li:last-child').offset();
        if($(this).parents('.select').hasClass('stop')){
            $('.content.report').stop(true).animate({scrollTop : 0});
        } else{
            $('.content').stop(true).animate({scrollTop : offset.top}, 400);
        }
        return false;
    });
    $('.select > ul.list > li').on('click',function(){
        var text = $(this).text();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.select').find('button').find('span').text(text);
        $(this).parents('.select').find('ul.list').slideToggle();
    });
    // $('body').on('click',function(e){
    //     if(e.target.className ==".select > ul.list"){return false}
    //     $('.select > ul.list').slideUp();
    // });
    $('.toggle-list > .toggle > .tit-box').on('click',function(){
        if($(this).find('i').hasClass('active')){
            $('i').removeClass('active');
        } else{
            $('i').addClass('active');
        }
        $(this).parents('.toggle').find('.txt-box').slideToggle(600);
        $(this).parents('.toggle').siblings().find('.txt-box').slideUp(600);
        $(this).parents('.toggle').siblings().find('i').removeClass('active');
        var offset = $(this).parents('.toggle').find('.txt-box').offset();
        $('.content').stop(true).animate({scrollTop : offset.top}, 400);
        return false;
    });
    $('.txt-box > button').on('click',function(){
        $(this).find('ul').slideToggle();
        return false;
    });
    $('.txt-box > button > ul > li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('body').on('click',function(e){
        if(e.target.className ==".txt-box > button > ul"){
            return false;
        }else{
            $('.txt-box > button > ul').slideUp();
        }
        if(e.target.className ==".select > ul.list"){
            return false;
        }else{
            $('.select > ul.list').slideUp();
        }
    });
    // $('.on-off-btn > p > button').on('click',function(){
    //     $(this).toggleClass('on');
    // });
    $(".plus-menu > button").on('click',function(){
        if($(this).hasClass('plus-btn')){
            $(this).addClass('active').removeClass('plus-btn');
            $(this).parents('.plus-menu').find('.marsk').fadeIn(500);
            $(this).parents('.plus-menu').find('.menu-btn').css({'display': 'block'}).stop(true).animate({'bottom':'82px','opacity': 1},400);
        }else if($(this).hasClass('active')){
            $(this).addClass('plus-btn').removeClass('active');
            $(this).parents('.plus-menu').find('.marsk').fadeOut(500);
            $(this).parents('.plus-menu').find('.menu-btn').stop(true).animate({'bottom':'10px','opacity': 0},400,function(){
                $(this).css({'display': 'none'})
            });
        }
    });
    $(".plus-menu > .marsk").on('click',function(){
        $(this).parents('.plus-menu').find('button').addClass('plus-btn').removeClass('active');
        $(this).stop().fadeOut(500);
        $(this).parents('.plus-menu').find('.menu-btn').stop(true).animate({'bottom':'10px','opacity': 0},400,function(){
            $(this).css({'display': 'none'})
        });
    });
    $(" ul.bank-list >li").on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
});