jQuery(window).load(function(){
	$('#freeBook').each(function(){
			$(this).addClass("floating");
	});
	
});

$(window).scroll(function() {	
	
	$('#fromLeft').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideRight");
		}
	});
	
	$('#fromRight').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideLeft");
		}
	});
});