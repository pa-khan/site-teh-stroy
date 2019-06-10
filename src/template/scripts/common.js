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


		if (li.hasClass('li-open')){
			$('.nav-block__list li > ul').slideUp(300);
			$('.nav-block__list > ul > li').removeClass('li-open');
		} else {
			$('.nav-block__list > ul > li').removeClass('li-open');
			$('.nav-block__list li > ul').slideUp(300);
			ul.slideDown(300);
			li.addClass('li-open');
		}
	});

	var nav = $('.nav__list'),
			hum = $('.hum'),
			humClass = 'hum_toggle',
			navBlockTitle = $('.nav-block__title'),
			navBlockTitleOpen = 'nav-block__title_open',
			navBlockList = $('.nav-block__list');

	hum.click(function(event) {
		hum.toggleClass(humClass);
		nav.slideToggle(300);
	});

	navBlockTitle.click(function(event) {
		if($(window).width()<992){
			navBlockList.slideToggle(500);
			navBlockTitle.toggleClass(navBlockTitleOpen);
		}
	});

	$(window).on('resize load', function(event) {
		if($(window).width()>=992){
			navBlockList.removeAttr('style');
			navBlockTitle.removeAttr('style');
		}
		if($(window).width()>=767){
			nav.removeAttr('style');
			hum.removeClass(humClass);
		} 
	});


	$('.tabs').tabs();
});
