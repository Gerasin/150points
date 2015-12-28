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



 	$('select').selectik({
		minScrollHeight: 20
	});

	$('.search-mob').click(function(){
		$('.head-search').addClass('active');
		return false;
	});

	jQuery('body').bind('focusin focus', function(e){
	  e.preventDefault();
	});


	$('.filter-h a').click(function(){
		$(this).parents('.filter-cat').find('.filter-select').fadeToggle();
		$(this).parent().toggleClass('active');
		return false;
	});
	$('.filter-select a').click(function(){
		var thisIn = $(this).parents('.filter-cat')
		var actHeader = $(this).text();
		thisIn.find('.filter-h a').text(actHeader);
		thisIn.find('.filter-select a').removeClass('active');
		$(this).parent().addClass('active');
		thisIn.find('.filter-select').fadeOut();
		thisIn.find('.filter-h').removeClass('active');
		return false;
	});


	// Меню в мобильном
	$('.menu-mob-lnk').click(function(){
		$('.menu-mob').slideDown();
		return false;
	});
	$('.menu-mob-close').click(function(){
		$('.menu-mob').slideUp();
		return false;
	});


	// Попап
	var popupOpen;
	$(".popup_open").click(function(){
		$('.popup:visible').fadeOut(200);
		popupStatus = 0;
		popupOpen = $(this).attr('rel');
		loadPopup(popupOpen);
		var popupTop = $(window).scrollTop() + 70;
		$(popupOpen).css({'top' : popupTop + 'px'});
		return false;
	});
	$(".popup_close, .popup-close, .popup_bg, .close").click(function(){
		disablePopup();
		return false;
	});
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});




});
var windScroll;
$(window).scroll(function(){

	windScroll = $(window).scrollTop();
	if(windScroll > $('.head-sl').height()) {
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



$(document).mouseup(function(e){
  	var container = $(".filter-cat"); 
  		if (!container.is(e.target) && container.has(e.target).length === 0){
      	$('.filter-select').fadeOut();
      	$('.filter-h').removeClass('active');
  	};


}); 

$('body').bind( "touchend", function(e){
	var container = $(".filter-cat"); 
  		if (!container.is(e.target) && container.has(e.target).length === 0){
      	$('.filter-select').fadeOut();
      	$('.filter-h').removeClass('active');
  	};


}); 




// Попап
var popupStatus = 0;

function loadPopup(popupOpen){
	if(popupStatus==0){
		$(".popup_bg").css({
			"opacity": "0.7"
		});
		$(".popup_bg").fadeIn(200);
		$(popupOpen).fadeIn(200);
		popupStatus = 1;
	}
}

function disablePopup(){
	if(popupStatus==1){
		$(".popup_bg").fadeOut(200);
		$(".popup").fadeOut(200);
		popupStatus = 0;
	}
}
