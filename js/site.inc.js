// =============================================================================
//	Imports
// =============================================================================
/* Function that updates the value field of text inputs */
function updateValue(input, text) {
	input.val(text);

	if(input.val() === null) {
		input.val(text);
	}
	input.focus(function() {
		if(input.val() === text) {
			input.val("");
		}
	});
	input.blur(function() {
		if(input.val() === null || input.val() === "") {
			input.val(text);
		}
	});
}

// =============================================================================
//  Background Image
//  =================
//  Function that applies the first image to the background of the element with options
//  -----------------
/*

  element: class to target
  options: background options
  hide: 1 for <img> only, 2 for entire .image div

  examples:
  backgroundImage($(".has-bg"), "center center / cover no-repeat", 2);
  backgroundImage($(".has-bg__collection li"), "center center / cover no-repeat", 2);
  backgroundImage($(".has-bg-li__collection li .collection-item-image"), "center center / cover no-repeat", 1);

*/
//  -----------------
// ==============================================================================
function backgroundImage(element, options, hide) {
	$( element ).each(function() {
    var imgSrc = $(this).find('img').first().attr('src');

    if ( hide == 1 ) {
      $(this).find('img').first('img').hide();
    }
    else {
      $(this).find('img').parent('.image, .spotlight-image').hide();
    }

    $(this).css('background', 'url('+imgSrc+')' + options);
 });
}

// =============================================================================
//  Body Class Toggler
//  =================
//  function that takes an element and applies a class when clicked
//  -----------------
//  example:
//  bodyClassToggler('mobile_menu', 'mobile_menu_is_visible');
//  -----------------
// ==============================================================================
function bodyClassToggler(element, elemClass){
	$(element).on('click', function(){
		$('body').toggleClass(elemClass);
	});
}

// =============================================================================
//  fireslider settings
//==============================================================================

  //--------------------------------------------------------------------------//
  //--------------------------------------------------------------------------//
  //this is what is set in the core js   //
  //--------------------------------------------------------------------------//
  //--------------------------------------------------------------------------//

  //-------------------------------------  
  //  carousel
  //-------------------------------------
  // $(".js-slider--carousel .js-slider__contents > ul").each(function(){
  //   $(this).fireSlider({
  //     delay:7500,
  //     disableLinks:false,
  //     show:3,
  //     active:2,
  //     effect:"fadeInOut",
  //     activeSlideClass:"slide--active",
  //     activePagerClass:"slider__pager--active",
  //     breakpoints:sliderCarouselBreakpoints,
  //     pager:$(this).parents(".slider__contents").siblings(".slider__pager"),
  //     prev:$(this).parents(".slider__contents").siblings(".slider__nav").find(".slider-nav--prev"),
  //     next:$(this).parents(".slider__contents").siblings(".slider__nav").find(".slider-nav--next")
  //   })
  // });


  //-------------------------------------
  //  NO carousel
  //-------------------------------------
  // $(".js-slider--no-carousel .js-slider__contents > ul").each(function(){
  //   $(this).fireSlider({
  //     delay:7500,
  //     disableLinks:false,
  //     show:1,
  //     active:1,
  //     effect:"fadeInOut",
  //     activeSlideClass:"slide--active",
  //     activePagerClass:"slider__pager--active",
  //     pager:$(this).parents(".slider__contents").siblings(".slider__pager"),
  //     prev:$(this).parents(".slider__contents").siblings(".slider__nav").find(".slider-nav--prev"),
  //     next:$(this).parents(".slider__contents").siblings(".slider__nav").find(".slider-nav--next")
  //   })
  // });


  //-------------------------------------
  //  breakpoints example
  //-------------------------------------
  // var bps = [
  //     {breakpoint: 1, show: 1, active: 1},
  //     {breakpoint: 640, show: 2, active: 1},
  //     {breakpoint: 1000, show: 4, active: 2}
  // ];


//spotlight

if ( $('.spotlight-container ul > li').length > 1 ) {

  $('.spotlight-container ul').each(function() {
   $(this).fireSlider({
     delay: 8000,
     prev:$(this).parents(".slider__contents").siblings(".slider__controls").find(".slider-nav--prev"),
     next:$(this).parents(".slider__contents").siblings(".slider__controls").find(".slider-nav--next")
   });
 });
  
}



//sponsors
var bps = [
    {breakpoint: 1, show: 1, active: 1},
    {breakpoint: 640, show: 2, active: 1},
    {breakpoint: 800, show: 3, active: 1},
    {breakpoint: 1000, show: 4, active: 2}
];

if ( $('.sponsors-container ul > li').length > 1 ) {
  $('.sponsors-container ul').fireSlider({
    active: 2,
    delay: 8000,
    disableLinks: false,
    prev:$(this).parent().siblings(".slider__controls").find(".slider-nav--prev"),
    next:$(this).parent().siblings(".slider__controls").find(".slider-nav--next"),
    breakpoints: bps
  });
}


//  document key up
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $('.showcase-screen').removeClass('open');
    $('.showcase-screen').find('img').remove();
  }
});


$(document).ready(function() {

	$('.caption').show();

	backgroundImage($(".has-bg"), "center center / cover no-repeat", 2);
	backgroundImage($(".has-bg__collection li"), "center center / cover no-repeat", 2);
	backgroundImage($(".has-bg-li__collection li .collection-item-image"), "center center / cover no-repeat", 1);


// =============================================================================
//	Project Toggle
// =============================================================================

	 $('.tab').on("click", function(){
	 	$(this).parent('.project').toggleClass('open');
	 	$(this).parent('.project').siblings().removeClass('open');
	 });

// =============================================================================
//	Photo Showcase
// =============================================================================

	$('.showcase').on("click", function(){
		$(this).find('img').clone().appendTo('.showcase-screen');
		$('.showcase-screen').addClass('open');
	});

	$('.showcase-screen').on("click", function(){
		$(this).removeClass('open');
		$(this).find('img').remove();
	});

}); // end document ready