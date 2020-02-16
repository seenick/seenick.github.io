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
        anchors: ['welcome','about','skills','work','work2','work3','work4'],
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