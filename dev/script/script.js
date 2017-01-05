var constant = {
	'SITE' : $("base").prop("href"),
	'API' : 'http://localhost/laravel_zeeza/',
	// 'API' : 'http://192.168.3.63/zeeza_api/',
	'MENU' : {
		'HEAD_MENU' : 1,
		'CONTENT_MENU' : 2,
		'FLASH_CONTENT' : 5
	},
	'SORT' : {
		'PRICE_MIN' : '1',
		'PRICE_MAX' : '2',
		'PRODUCT_NEW' : '3'
	}
}

function diffDay($date){
	var now = new Date();
	var tgl = new Date($date);

	var timeDiff = Math.abs(now.getTime() - tgl.getTime())
	var dayDiff = Math.ceil(timeDiff / (1000*3600*24));
	return dayDiff;
}

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

var toggleMenu = function(){
	if($('.navbar-wrapper').css('left') != '0px'){
		$('.navbar-wrapper').removeAttr('style')
		$('.navbar-wrapper').css('left','0');	
	}else{
		$('.navbar-wrapper').removeAttr('style')
		$('.navbar-wrapper').css('left','-900');	
	}
	
	$('body').toggleClass('overflow-hide')
}

$(document).ready(function(){
	mobileAdapt()
	$('body').click(function(e){		
		// e.stopPropagation();
		$('.navbar-wrapper').removeClass('navbar-active');	
		$(this).removeClass('overflow-hide')
	})

	var includeTemp = $('div').attr('append-template');
	$('div[append-template]').each(function(key, value){		
		$.get($(this).attr('append-template'), function(data){
			$(value).append(data)
		})
	})

	// console.log($('div').attr('append-template'))

	$('.navbar-wrapper').click(function(e){
		e.stopPropagation();
	})

	$('.navbar-category ul li').on('click', function(){		
		$(this).find('ul').toggleClass('active')
	})	

	
	$.ajax({
		type:'GET',
		url:constant.API+'menu',
		async:true,
		success:function(data){
			console.log(data)
			var head_menu = _.where(data, {menu:constant.MENU.HEAD_MENU})
			var contact_menu = _.where(data, {menu:constant.MENU.CONTENT_MENU})
			var flash_content = _.where(data, {menu:constant.MENU.FLASH_CONTENT})
			for(var i=0; i < head_menu.length; i++){
				$('#head_menu').append('<li><a href="information.html?id='+head_menu[i].id+'">'+head_menu[i].name+'</a></li>')
			}

			for(var i=0; i < contact_menu.length; i++){
				$('#contact_menu').append('<div><img src="./assets/images/logo_'+contact_menu[i].name+'.png" alt="" align="middle"><span>'+contact_menu[i].content+'</span></div>')
				// $('#contact_menu').append('<li><div><img src="./assets/images/logo_'+contact_menu[i].name+'.png"/></div><div>'+contact_menu[i].content+'</div></li>')
			}

			for(var i=0; i<flash_content.length;i++){
				$('.flash-news').append(flash_content[i].content+'<font style="color:#000">   | </font>')
			}
		}
	})	

	$.ajax({
		type:'GET',
		url:constant.API+'menu/nav',
		async:true,
		success:function(data){
			var sidebar_menu = document.getElementById('sidebar-list');
			for(var i=0; i < data.length; i++){
				$('#main_menu').append('<li id="menu_'+data[i].id_category+'""><a>'+data[i].name+'<span class="icon-angle-down"></span></a><ul></ul></li>');
				
				// if(sidebar_menu!=null){
				// 	$('#sidebar-list>ul').append('<li id="menu_'+data[i].id_category+'""><a>'+data[i].name+'<span class="icon-plus-square-o"></a><ul></ul></li>');
				// }

				for(var x=0; x<data[i].child.length;x++){
					$('li#menu_'+data[i].id_category+' ul').append('<li><a href="product.html?id='+data[i].child[x].id_type+'">'+data[i].child[x].name+'</a></li>')
				}			
			}
		},
		error:function(status){

		}
	})

	$('#icon-search').on('click', function(){
		$('div.search-input').toggleClass('show-input');
		console.log('')
	})

})


$(window).bind('resize',function(){
	mobileAdapt()
})

