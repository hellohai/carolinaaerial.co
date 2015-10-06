//@codekit-prepend "vendor-libs/jRespond.1.0.js"; // Responsive JS solution
//@codekit-prepend "vendor-libs/response-0.7.8.js"; // Responsive Image / Content solution
//@codekit-prepend "vendor-libs/jquery.bxslider4.1.1.js"; // BXSlider - Content slider
//@codekit-prepend "vendor-libs/jquery.hoverIntent.1.8.1.js"; // HoverIntent
//@codekit-prepend "vendor-libs/jquery.superfish.1.7.5.js"; // Superfish Menus
//@codekit-prepend "vendor-libs/jquery.fancybox.pack.js"; // 

(function(window, document, $, R, J) {
	
	// Setup Responsive Content Object	
	R.create({ 
		prop: "width",
		prefix: "src",
		breakpoints: [0, 320, 640, 960, 1280],
		lazy: true
	});

	
	// navigation menu button function
	$('.mobile-touch-target').click(function() {
		$('.navigation-list, .mobile-trigger i, .mobile-trigger, body').toggleClass('active');
	});
	
	// init'ing the slider on the contact page
	$('.slider-contact').bxSlider();
	
	// init'ing fancybox
	$('.js-fancybox').fancybox({
		padding: 0,
		width: '100%',
		height: '100%',
	});

	// portfolio filter button function
	$('.filter-trigger').click(function() {
		$('.filter-btn-container').toggleClass('show');
		$(this).toggleClass('show');
	});

	// CTA button on the contact page to reveal the form
	$('.btn-contact-trigger').click(function() {
		$('.contact-form').toggleClass('show');
		$(this).addClass('hide');
	});
	
	// contact form label interaction
	$('label').click(function() {
		$(this).parent('fieldset').addClass('label-up');
		$(this).next('input').focus();
	});
	$('input').focus(function() {
		$(this).parent('fieldset').addClass('label-up');
		//$(this).next('input').focus();
	});
	

	// Change header on scroll, fixed in this case
	var changeHeader = 200;
	$(window).scroll(function() {
		var scroll = getCurrentScroll();
		if ( scroll >= changeHeader ) {
			$('.site-header').addClass('fixed');
		} else {
			$('.site-header').removeClass('fixed');
		}
	});
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
	
	// changing overflow on body on different pages b/c of full screen menu
	$('body:not(.about)').parent('html').css({'overflow': 'auto'});
	$('body.home,body.contact').parent('html').css({'overflow': 'hidden'});


	// Breakpoint-specific functions
	var jRes = new J([ // Setup of jResponse
		{ label: '4', enter: 0, exit: 639 },
		{ label: '8', enter: 640, exit: 959 },
		{ label: '12', enter: 960, exit: 1279 },
		{ label: '16', enter: 1280, exit: 10000 }
	]);
	
	jRes.addFunc({ // Function Called On ALL Breakpoints during a Resize
		breakpoint: '*',
		enter: function() { // A function called on enter of ANY breakpoint

		},
		exit: function() { // Called on Exit of ANY breakpoing
			
		}
	});
	
	jRes.addFunc([ // Enter and Exit callbacks based on breakpoints
		{
			breakpoint: '16',
			enter: function() {

			},
			exit: function() {

			}
		},{
			breakpoint: '12',
			enter: function() {
				
			},
			exit: function() {

			}
		},{
			breakpoint: '8',
			enter: function() {

			},
			exit: function() {
				
			}
		},{
			breakpoint: '4',
			enter: function() {
			},
			exit: function() {
			}
		},{
			breakpoint: ['12', '16'], // Both 12 and 16 columns layouts
			enter: function() {
				// Main Navigation Element
				$('.navigation-list').superfish({
					delay : 300,
					animation : {opacity:'show',height:'show'},
					speed : 'fast',
					autoArrows : false
				});
			},
			exit: function() {
				// Main Navigation Element
				$('.navigation-list').superfish('destroy');
			}
		},{
			breakpoint: ['4', '8'], // Both 4 and 8 columns layouts
			enter: function() {
					
				// Our Mobile Navigation - We are going to leave this active during all breakpoints
				$('.navigation-list').removeClass('active');
				(function setup_mobile_nav(){
					// Do we have our Mobile Nav setup yet, if not, then let's add our .has-menu
					if($('.has-menu').length == 0){
						$('.sub-menu').siblings('a').addClass('has-menu').append('<span class="arrow"></span>');
					} else { // If was setup, let's close everything if a user is coming back
						close_menus();
					}
					
					var $menu = $('.navigation-list'),
						$menulink = $('.toggle-mobile-menu'),
						$menuTrigger = $('.has-menu .arrow'),
						close_menus = function(){
							$('.has-menu, .sub-menu').removeClass('active');
							$('.close-menu').stop().fadeOut(300);
						};
					
					$menulink.on({
						'click' : function(){
							$menu.toggleClass('active');
							$('.close-menu').stop().fadeToggle(300);
							return false;
						},
						'touchstart' : function(){
							$(this).trigger('click');
							return false;
						}
					});
					$menuTrigger.on({
						'click' : function(){
							$(this).parent('.has-menu').toggleClass('active').next('ul').toggleClass('active');
							return false;
						},
						'touchstart' : function(){
							$(this).trigger('click');
							return false;
						}
					});
				}());
			},
			exit: function() {
				
			}
		}
	]);

}(this, this.document, this.jQuery, this.Response, this.jRespond));
