$(document).ready(function(){
	$('body').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.navbar-wrapper').removeClass('navbar-active');	
	})

	$('.menu-toggle').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.navbar-wrapper').toggleClass('navbar-active');
	})

	$('.navbar-category ul li').on('click', function(){		
		$(this).find('ul').toggleClass('active')
		// $(this).find('ul').css('display','block')
	})
})