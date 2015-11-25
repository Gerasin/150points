function slSize(){
	var windWidth = $(window).width();
	var windHeight = $(window).height();
	$('.head-sl-item').css({'width' : windWidth, 'height' : windHeight});
};
$(window).resize(function(){
	slSize()
});

$(document).ready(function(){

	// Слайдер в шапке
	slSize();

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
	var txtHeight;
	$('.text-open span').click(function(){
		if($(window).width() > 1020) {
			txtHeight = 140;
		} else {
			txtHeight = 130;
		};
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
	/*$('input, textarea').focus(function(){
   		$(this).data('placeholder',$(this).attr('placeholder'))
   		$(this).attr('placeholder','');
 	});
 	$('input, textarea').blur(function(){
   		$(this).attr('placeholder',$(this).data('placeholder'));
 	});*/


 	$('select').selectik({
		minScrollHeight: 20
	});

	$('.search-mob').click(function(){
		$('.head-search').addClass('active');
		return false;
	});

	jQuery('body').bind('focusin focus', function(e){
	  e.preventDefault();
	})


});
var windScroll;
$(window).scroll(function(){

	windScroll = $(window).scrollTop();
	if(windScroll > 10) {
		$('.head').addClass('active');
		$('.head-search').fadeIn();
	} else {
		$('.head').removeClass('active');
		if($(window).width() > 1020) {
			if($('.head-search').hasClass('active')) {} else {
				$('.head-search').fadeOut();
			};
		};
	};

	$('.close').click(function(){
		$('.head-search').removeClass('active');
		return false;
	});

	setTimeout("$('select').css({'left' : -5000 + 'px'});", 400);

});