$(document).ready(function() {
    
    $(window).scroll(function(scroll) {
        var navStart = $('#nav-holder').offset().top;
        var headStart = $('#head-container').offset().top;
        
        
        var scroll = $(window).scrollTop();
        if(scroll >= navStart) {
            $('.flexnav').addClass('navbar-fixed-top');
        }
        else {
            $('.flexnav').removeClass('navbar-fixed-top');
        }
    });
	$('.bxslider').bxSlider({
        auto: true,
        controls: false,
        pager: false,
        speed: 1500
    });
    
});