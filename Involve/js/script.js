$(window).on('scroll',function(){
			if($(window).scrollTop()){
				$('header').addClass('white');
			}
			else{
				$('header').removeClass('white');
			}
			if($(window).scrollTop() > 800){
				$('.move-up').addClass('visible');
			}
			else{
				$('.move-up').removeClass('visible');
			}
});

$(function(){
	$('.menu-toggle').click(function(){
		$('.menu-toggle').toggleClass('active');
		$('nav').toggleClass('active');
	});
	$('ul li').click(function(){
		$(this).siblings().removeClass('active')
		$(this).toggleClass('active')
	});
});

