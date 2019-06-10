$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('.nav-block__list ul ul').each(function(index, el) {
		var li = $(this).parents('li');

		li.prepend('<div class="li-toggle-btn"></div>');
	});

	$('.nav-block__list > ul > li > a').click(function(event) {
		event.preventDefault();
		var li = $(this).parents('li'),
				ul = li.find('ul');

		li.toggleClass('li-open');
		ul.slideToggle(300);
	});

	var nav = $('.nav__list'),
			hum = $('.hum'),
			humClass = 'hum_toggle',
			navBlockTitle = $('.nav-block__title'),
			navBlockList = $('.nav-block__list');

	hum.click(function(event) {
		hum.toggleClass(humClass);
		nav.slideToggle(300);
	});

	navBlockTitle.click(function(event) {
		if($(window).width()<992){
			navBlockList.slideToggle(500);
		}
	});

	$(window).on('resize load', function(event) {
		if($(window).width()>=992){
			navBlockList.removeAttr('style');
		}
		if($(window).width()>=767){
			nav.removeAttr('style');
			hum.removeClass(humClass);
		} 
	});


	$('.tabs').tabs();
});
