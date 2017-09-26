// =============================================================================
//	Imports
// =============================================================================

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