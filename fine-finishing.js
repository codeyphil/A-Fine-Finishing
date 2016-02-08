$(document).ready(function() {
    
	function bindNavbar() {
		if ($(window).width() > 1085) {
			$('.navbar-default .dropdown').on('mouseover', function(){
				$('.dropdown-toggle', this).next('.dropdown-menu').show();
			}).on('mouseout', function(){
				$('.dropdown-toggle', this).next('.dropdown-menu').hide();
			});
			
			$('.dropdown-toggle').click(function() {
				if ($(this).next('.dropdown-menu').is(':visible')) {
					window.location = $(this).attr('href');
				}
			});
		}
		else {
			$('.navbar-default .dropdown').off('mouseover').off('mouseout');
		}
	}
	
	$(window).resize(function() {
		bindNavbar();
	});
	
	bindNavbar();
    
    $(window).scroll(function(scroll) {
        var navStart = $('#nav-holder').offset().top;
        var headStart = $('#head-container').offset().top;
        
        
        var scroll = $(window).scrollTop();
        if(scroll >= navStart) {
            $('nav').addClass('navbar-fixed-top');
            $('[data-fb]').animate({opacity: '1'}, 0);
            $('#access-jump').animate({opacity: '1'}, 0);
             $('.navbar').animate({width: '100%'}, 0);
            if(window.matchMedia("screen and (max-width: 630px)").matches) {
            $('[data-fb=data-image]').animate({opacity: '0'}, 0);
            $('#access-jump').animate({opacity: '0'}, 0);
            }   
            
            if(window.matchMedia("(min-width: 1715px)").matches) {
                $('#access-jump').animate({top: '1%'}, 0);
                $('.navbar-nav').animate({marginLeft: '25em'}, 0);
                $('.navbar-right').animate({marginRight: '25em'}, 0);
            }
            else if(window.matchMedia("screen (min-width: 768px) and (max-width: 1085px)").matches) {
                $('#access-jump').animate({top: '10%'}, 0);
                 $('.navbar-nav').animate({marginLeft: '2em'}, 0);
                $('.navbar-right').animate({marginRight: '2em'}, 0);
            }
            else if(window.matchMedia("screen and (min-width: 1085px) and (max-width: 1715px)").matches) {
                $('#access-jump').animate({top: '1%'}, 0);
                 $('.navbar-nav').animate({marginLeft: '10em'}, 0);
                $('.navbar-right').animate({marginRight: '10em'}, 0);
            }
            else if(window.matchMedia("screen and (min-width: 200px) and (max-width: 1715px)").matches) {
                $('#access-jump').animate({top: '1%'}, 0);
                $('[data-fb=data-image]').animate({top: '.75%'}, 0);
                $('[data-fb=data-image]').animate({opacity: '1'}, 0);
            $('#access-jump').animate({opacity: '1'}, 0);
            }
        }
        else {
            $('nav').removeClass('navbar-fixed-top');
            if(window.matchMedia("screen and (min-width: 1275px)").matches) {
            $('.navbar-nav').animate({marginLeft: '-1.2em'}, 0);
            $('.navbar-right').animate({marginRight: '-1.2em'}, 0);
            $('.navbar').animate({width: '75em'}, 0);
            $('#access-jump').animate({top: '1%'}, 0);
            }
            else if(window.matchMedia("screen (min-width: 1085px) and (max-width: 1275px)").matches) {
                $('#access-jump').animate({top: '35%'}, 0);
                $('.navbar-nav').animate({marginLeft: '1em'}, 0);
            $('.navbar-right').animate({marginRight: '1em'}, 0);
            }
            
            else if(window.matchMedia("screen (min-width: 200px) and (max-width: 630)").matches) {
                $('#access-jump').animate({top: '32%'}, 0);
                $('[data-fb=data-image]').animate({top: '32%'}, 0);
                $('#access-jump').animate({opacity: '1'}, 0);
                $('[data-fb=data-image]').animate({opacity: '1'}, 0);
            }
            else {
                $('#access-jump').animate({top: '26%'}, 0);
            }
        }
    });
    
});






