// =============================================================================
//	Imports
// =============================================================================

$(document).ready(function() {

	$('.caption').show();


// =============================================================================
//	Background image
// =============================================================================

	$('.has-bg').each(function(){
		var imgSrc = $(this).find('img').attr('src');

		$(this).css('background-image', 'url(' + imgSrc + ')');
		$(this).find('img').hide();
	});

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


// =============================================================================
//	Document Keyup
// =============================================================================
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $('.showcase-screen').removeClass('open');
    $('.showcase-screen').find('img').remove();
  }
});