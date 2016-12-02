// =============================================================================
//	Imports
// =============================================================================
//= include components/updatevalue.js
//= include components/backgroundImage.js
//= include components/bodyClassToggler.js
//= include components/fireslider_settings.js


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
//	Project Toggle
// =============================================================================

}); // end document ready