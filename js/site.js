/*
** initialize swiperjs
*/

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  	},
  	slidesPerView: 5,
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