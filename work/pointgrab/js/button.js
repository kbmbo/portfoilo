////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// 2020.03.23
//// 작성자 : kspring
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $('button.push').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        } else{
            $(this).addClass('active');
        }
    });
    $("#Allagree").on('click',function(){
        if($("#Allagree").is(":checked")){
            $(".chk").prop("checked",true);
        } else{
            $(".chk").prop("checked",false);
        }
    });
    $(".chk").on('click',function(){
        if($("input[name='agree']:checked").length===3){
            $("#Allagree").prop("checked",true);
        } else{
            $("#Allagree").prop("checked",false);
        }
    });
    $('.toggle-list > .toggle').on('click',function(){
        if($(this).find('i').hasClass('active')){
            $('i').removeClass('active');
        } else{
            $('i').addClass('active');
        }
        $(this).find('.txt').slideToggle(600);
        $(this).siblings().find('.txt').slideUp(600);
        $(this).siblings().find('i').removeClass('active');
    });

    $(".inquire .tap li").on('click',function(){
        if($(".inquire .tap li:last-child").hasClass('active')){
            $('.sub-tap').css('display','block');
        } else {
            $('.sub-tap').css('display','none');
        }
    });
    if($('.F-list').children('li').hasClass('all')){
        $('.con-box').find('p.NA').remove();
    } else {
        var conboxH = $('.con-box').height()-100;
        $('.con-box').find('p.NA').css({"line-height": conboxH+'px'});
    }
    $(".FBox .FBtn").on('click',function(){
        var FName = $(this).attr('data-filter');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.F-list li').css('display','none');
        if($('.F-list').hasClass('item-list')){
            $('.F-list.item-list').children('li').css({'border':'0'});
            $('.F-list.item-list').find('.'+FName).stop().fadeIn(300);
        } else{
            $('.F-list').find('.'+FName).stop().fadeIn(300);
        }
    });

    $('#search').keyup(function(){
        $("#searchXbtn").toggle(Boolean($(this).val()));
    });
    $('#searchXbtn').toggle(Boolean($('#search').val()));
    $('#searchXbtn').click(function(){
        $("#search").val('').focus();
        $(this).hide();
    });
    $("#top-btn").on('click',function(){
        $('.con-box').animate({
            scrollTop : 0
        }, 400);
    });
});