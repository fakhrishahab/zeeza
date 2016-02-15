$.ajax({
	type:'GET',
	url:constant.API+'menu/nav',
	async:true,
	success:function(data){
		for(var i=0; i < data.length; i++){
			$('#main_menu').append('<li id="menu_'+data[i].id_category+'""><a>'+data[i].name+'<span class="icon-angle-down"></span></a><ul></ul></li>');
			for(var x=0; x<data[i].child.length;x++){
				$('li#menu_'+data[i].id_category+' ul').append('<li><a href="product.html?id='+data[i].child[x].id_type+'">'+data[i].child[x].name+'</a></li>')
			}			
		}

	},
	error:function(status){

	}
})