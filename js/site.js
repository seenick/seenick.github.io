/*
** pagePiling
*/

$(document).ready(function() {
	$('#pagepiling').pagepiling({
		navigation: {
            'textColor': '#FFFFFF',
            'bulletsColor': '#FFFFFF',
            'position': 'right'
        },
        anchors: [],
        css3: true,
        loopBottom: true,
    	loopTop: true,
    	keyboardScrolling: true
	});
});

$(document).ready(function() {
	$('#pp-nav ul li').each(function(){
		$(this).on('click',function(){
			$(this).addClass('is-active');
			$(this).siblings().removeClass('is-active');
		});
	});
});


//// apply background image ////

	// photo gallery
	$(window).on('load',function(){
		$('.photo-gallery li').each(function(){
			var imgSrc = $(this).find('img').attr('src');
			$(this).css('background-image', 'url(' + imgSrc + ')');
		});
	});