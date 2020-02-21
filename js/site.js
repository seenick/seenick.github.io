/*
** initialize swiperjs
*/

$(document).ready(function () {

	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		autoplay: {
			delay: 5000,
		},
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 5,
		loopedSlides: 6,
		breakpoints: {
	        640: {
	          slidesPerView: 3,
	          spaceBetween: 20,
	        },
	        830: {
	          slidesPerView: 4,
	          spaceBetween: 40,
	        },
	        1050: {
	          slidesPerView: 5,
	          spaceBetween: 50,
	        },
	    }
	});

});


/*
** offcanvas menu
*/

$('.menu-trigger').attr('aria-expanded','false');
$('.offcanvas-menu').attr('aria-expanded','false');

$('.menu-trigger').on('click',function(){
	$('.offcanvas-menu').addClass('is-visible');
	$('.offcanvas-menu').attr('aria-expanded','true');
	$('.menu-trigger').attr('aria-expanded','true');
});

$('.close-trigger').on('click',function(){
	$('.offcanvas-menu').removeClass('is-visible');
	$('.offcanvas-menu').attr('aria-expanded','false');
	$('.menu-trigger').attr('aria-expanded','false');
});

$(document).keyup(function(e) {
	// esc
	if (e.keyCode === 27)  {
		$('.offcanvas-menu').removeClass('is-visible');
		$('.offcanvas-menu').attr('aria-expanded','false');
		$('.menu-trigger').attr('aria-expanded','false');
	} 
});


/*
** anchor smooth scroll
*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});