function $params(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function $params2(val) {
    var result = "Params not found",
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function mobileAdapt(){
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	

	if(w < 540){
		$('#section-category').insertAfter('#section-product')
	}else{
		$('#section-product').insertAfter('#section-category')
	}
}

$(document).ready(function(){
	mobileAdapt()
	$('body').click(function(e){		
		e.stopPropagation();
		$('.navbar-wrapper').removeClass('navbar-active');	
		$(this).removeClass('overflow-hide')
	})

	$('.menu-toggle').on('click', function(e){
		e.stopPropagation();
		$('.navbar-wrapper').toggleClass('navbar-active');
		$('body').toggleClass('overflow-hide')
	})

	$('.navbar-wrapper').click(function(e){
		e.stopPropagation();
	})

	$('.navbar-category ul li').on('click', function(){		
		$(this).find('ul').toggleClass('active')
	})	
})

$(window).bind('resize',function(){
	mobileAdapt()
})