var id = $params('id');

$.ajax({
	method:'GET',
	url:constant.API+'menu/content?id='+id,
	success:function(data){
		$('#content_title').html(data[0].name);
		$('#content_info').html(data[0].content)
	},
	error:function(){
		console.log('error get content, id='+id)
	}
})