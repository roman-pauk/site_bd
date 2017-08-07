$(function() {

	// Custom JS
	$('.burger').click(function(){
		var th = $(this);
		$('.toggleMenu').slideToggle('slow', function() {
			th.toggleClass('burger-anim');
		});
	});

	$('.buttonDown').click(function(){
		$('html, body').animate({scrollTop: $('#whatWeDo').offset().top}, 'slow');
	});

	$('.mainCarousel').owlCarousel({
		loop:true,
    margin:0,
    items: 1,
    nav:true,
    navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
	});

	$('.sectCarousel__carousel').owlCarousel({
		loop:true,
    margin:50,
    nav:true,
    dots:false,
    autoWidth: true,
    navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
	});


	$('.skillItem').each(function() {
		var itNum = $(this).find('.number').attr('data-number') * 3.6;
		$(this).find('.skillItem__circle').append($('<div class="circle-rot"></div>'));
		$(this).find('.circle-rot').css('transform', 'rotate(-225deg) rotate('+ itNum +'deg)');
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).width()){
			$('.buttonTop').addClass('buttonTop-active');
		} else {
			$('.buttonTop').removeClass('buttonTop-active');
		}
	});

	$('.buttonTop').click(function() {
		$('html, body').animate({scrollTop: 0}, 'slow', 'swing');
	});
	
});
