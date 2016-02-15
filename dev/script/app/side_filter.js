var age = [];

$.ajax({
	type : 'GET',
	url:constant.API+'size',
	success:function(data){
		for(var i=0; i < data.length; i++){
			$('#sidebar-age>ul').append('<li><a href="product.html?size='+data[i].id_age+'">'+data[i].name+'</a></li>')
		}

		// $('.check_size').on('click', function(){	
		// 	if($(this).prop('checked') == true){
		// 		age.push($(this).val())
		// 	}else{
		// 		var current = $(this).val()
		// 		$.each(age, function(key, value){
		// 			if(current == value){
		// 				age.splice(key, 1)
		// 			}	
		// 		})
		// 	}
			
		// })
	},
	error:function(){

	}
})

$.ajax({
	type:'GET',
	url:constant.API+'brand/view',
	success:function(data){
		for(var i=0; i < data.length; i++){
			$('#sidebar-brand>ul').append('<li><a href="product.html?brand='+data[i].id+'">'+data[i].name+'</a></li>')
		}
	},
	error:function(){
		console.log('error')
	}
})

