/*------------------------------------------------------------------
Project:        Wooster - HTML onepage theme by GraphBerry.com
Version:        1.0
Last change:    04/07/2015
Author:         GraphBerry
URL:            http://graphberry.com
License:        http://graphberry.com/pages/license
-------------------------------------------------------------------*/
$(function(){
	'use strict';

/*--------------------------------------------------
    Initialize portfolio filter
    ---------------------------------------------------*/
	$('#portfolio-grid').mixItUp();

/*--------------------------------------------------
    fancybox
    ---------------------------------------------------*/
	$(".fancybox").fancybox({				
				padding : 0,
				autoResize: true,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});
			
	$(".fancybox2").fancybox({				
				padding : 0,
				autoResize: true,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<a href="' + this.title + '"  target="_blank">' +'<h4>' + this.title + '</h4>' + '</a>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});

/*--------------------------------------------------
    Page Scroll Features 
    ---------------------------------------------------*/
	smoothScroll.init({
        speed: 1000,
        updateURL: true,
        offset: 50
    });

$(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
            $('#header-nav').addClass('navbar-wooster');
        } else {
            $('#header-nav').removeClass('navbar-wooster');
        }
    });

});