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

  $('header .wrap').navChecker();


// =============================================================================
//	Prject Toggle
// =============================================================================

	 $('.top .tab').on("click", function(){
	   $('body').toggleClass('top_visible').removeClass('left_visible').removeClass('right_visible').removeClass('bottom_visible');
	 });
	 $('.left .tab').on("click", function(){
	   $('body').toggleClass('left_visible').removeClass('top_visible').removeClass('right_visible').removeClass('bottom_visible');
	 });
	 $('.right .tab').on("click", function(){
	   $('body').toggleClass('right_visible').removeClass('left_visible').removeClass('top_visible').removeClass('bottom_visible');
	 });
	 $('.bottom .tab').on("click", function(){
	   $('body').toggleClass('bottom_visible').removeClass('left_visible').removeClass('right_visible').removeClass('top_visible');
	 });

}); // end document ready