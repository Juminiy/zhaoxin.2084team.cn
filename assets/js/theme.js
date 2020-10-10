/*
Author       : ThemeTurn.
Template Name: Probiz-personal portfolio landing template
Version      : 1.0
*/

jQuery(function($) {
	"use strict";

		/*START MENU JS*/
		$(window).on('scroll', function() {
			if ($(".navbar").offset().top > 50) {
				$(".navbar-fixed-top").addClass("top-nav-collapse");
			} else {
				$(".navbar-fixed-top").removeClass("top-nav-collapse");
			}
		});
		
		$('a.page-scroll').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 10 
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		/* Closes the Responsive Menu on Menu Item Click*/
		$('.navbar-collapse ul li a').on('click', function() {
			$('.navbar-toggle:visible').click();
		});
		/*END MENU JS*/ 

   
  /* ----------------------------------------------------------- */
 /*ISotope Portfolio
 /* ----------------------------------------------------------- */   
     $(window).load(function(){
      var $container = $('.portfolio-wrap');
      var $filter = $('#isotope-filter');
      // Initialize isotope 
      $container.isotope({
          filter: '*',
          layoutMode: 'fitRows',
          animationOptions: {
              duration: 750,
              easing: 'linear'
          }
      });
      // Filter items when filter link is clicked
      $filter.find('a').click(function () {
          var selector = $(this).attr('data-filter');
          $filter.find('a').removeClass('current');
          $(this).addClass('current');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  animationDuration: 750,
                  easing: 'linear',
                  queue: false,
              }
          });
          return false;
      }); 


  // Portfolio Isotope
    
    
    var container = $('.portfolio-wrap'); 
    
      function splitColumns() { 
        var winWidth = $(window).width(), 
          columnNumb = 1;
        
        
        if (winWidth > 1024) {
          columnNumb = 4;
        } else if (winWidth > 900) {
          columnNumb = 2;
        } else if (winWidth > 479) {
          columnNumb = 2;
        } else if (winWidth < 479) {
          columnNumb = 1;
        }
        
        return columnNumb;
      }   
      
      function setColumns() { 
        var winWidth = $(window).width(), 
          columnNumb = splitColumns(), 
          postWidth = Math.floor(winWidth / columnNumb);
        
        container.find('.portfolio-box').each(function () { 
          $(this).css( { 
            width : postWidth + 'px' 
          });
        });
      }   
      
      function setProjects() { 
        setColumns();
        container.isotope('reLayout');
      }   
      
      container.imagesLoaded(function () { 
        setColumns();
      });
      
    
      $(window).bind('resize', function () { 
        setProjects();      
      });
    });
	
		/*START PORTFOLIO JS*/  
	  
	/*START WOW ANIMATIONS JS*/ 
		new WOW().init();
	/*END WOW ANIMATIONS JS*/ 
  });