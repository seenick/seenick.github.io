// =============================================================================
//	Imports
// =============================================================================
//= include components/updatevalue.js
//= include components/backgroundImage.js
//= include components/bodyClassToggler.js
//= include components/placeholders.js
//= include components/accordianMenu.js
//= include components/navChecker.js
//= include components/textWrapper.js
//= include components/fireslider_settings.js
//= include components/landing_page.js

$(document).ready(function() {

	backgroundImage($(".has-bg"), "center center / cover no-repeat", 2);
	backgroundImage($(".has-bg__collection li"), "center center / cover no-repeat", 2);
	backgroundImage($(".has-bg-li__collection li .collection-item-image"), "center center / cover no-repeat", 1);
	
  placeHolders('form');

// =============================================================================
//	Project Toggle
// =============================================================================

	$('.nav-container ul li:first-child').on("click", function(){
	  $('body').toggleClass('one_is_visible').removeClass('two_is_visible').removeClass('three_is_visible').removeClass('four_is_visible');
	});

	$('.nav-container ul li:nth-child(2)').on("click", function(){
	  $('body').toggleClass('two_is_visible').removeClass('one_is_visible').removeClass('three_is_visible').removeClass('four_is_visible');
	});

	$('.nav-container ul li:nth-child(3)').on("click", function(){
	  $('body').toggleClass('three_is_visible').removeClass('one_is_visible').removeClass('two_is_visible').removeClass('four_is_visible');
	});

	$('.nav-container ul li:nth-child(4)').on("click", function(){
	  $('body').toggleClass('four_is_visible').removeClass('one_is_visible').removeClass('two_is_visible').removeClass('three_is_visible');
	});

// =============================================================================
//	Nav text grab
// =============================================================================

	var navText = $('.projects-container .collection ul li:first-child .collection-item-label a').text();
    $('.nav-container ul li:first-child').append('<p>' + navText +'</p>');

    var navText2 = $('.projects-container .collection ul li:nth-child(2) .collection-item-label a').text();
    $('.nav-container ul li:nth-child(2)').append('<p>' + navText2 +'</p>');

    var navText3 = $('.projects-container .collection ul li:nth-child(3) .collection-item-label a').text();
    $('.nav-container ul li:nth-child(3)').append('<p>' + navText3 +'</p>');

	var navText4 = $('.projects-container .collection ul li:nth-child(4) .collection-item-label a').text();
    $('.nav-container ul li:nth-child(4)').append('<p>' + navText4 +'</p>');


}); // end document ready