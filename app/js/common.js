$(function() {

	// Custom JS
	$('button').click(function(){});

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

});
