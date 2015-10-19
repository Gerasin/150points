$(document).ready(function(){

	// Слайдер в шапке
	$('.head-sl').slick({
	  	dots: true,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 1,
	  	adaptiveHeight: true
	});
	$('.sl-btn-left').click(function(){
		$('.head-sl .slick-prev').click();
		return false;
	});
	$('.sl-btn-right').click(function(){
		$('.head-sl .slick-next').click();
		return false;
	});

	// Слайдер в контенте
	$('.slider-items').slick({
	  	dots: true,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 1,
	  	adaptiveHeight: true
	});

	// таб
	$('.contractors-cont-i:first').show();
	$('.contractors-tab a').click(function(){
		var index = $(this).parents('li').index();
		$('.contractors-tab li').removeClass('active');
		$(this).parents('li').addClass('active');
		$('.contractors-cont-i').hide();
		$('.contractors-cont-i').eq(index).show();
		return false;
	});


	// opent txt
	$('.text-open a').click(function(){
		var txtHeight = $(this).parents('.form-text').find('.form-text-over').height();
		$(this).parents('.form-text').find('.form-text-cont').animate({'height' : txtHeight + 'px'});
		$(this).parents('.form-text').addClass('active');
		return false;
	});
	$('.text-open span').click(function(){
		var txtHeight = 140;
		$(this).parents('.form-text').find('.form-text-cont').animate({'height' : txtHeight + 'px'});
		$(this).parents('.form-text').removeClass('active');
		return false;
	});


	// Click scroll
	$('.scroll-btn').click(function(){
		var nextSl = $('.service-content').offset().top;
		$('html, body').animate({scrollTop : nextSl}, 1000);
		return false;
	});

	// placeholder
	$('input, textarea').focus(function(){
   		$(this).data('placeholder',$(this).attr('placeholder'))
   		$(this).attr('placeholder','');
 	});
 	$('input, textarea').blur(function(){
   		$(this).attr('placeholder',$(this).data('placeholder'));
 	});


});