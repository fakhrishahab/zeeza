$.ajax({
	method:'GET',
	url:constant.API+'product',
	success:function(data){
		console.log(data)
		for(var i =0; i < data.length; i++){
			$('#latest_product').append('<div class="grid-col-2 grid-col-sm-6 grid-col-xs-12 product-container"><a href="product_detail.html?id='+data[i].id+'"><div class="product-detail"><div class="product-image" style="background-image:url('+constant.API+'image?img='+data[i].code+')"></div><div class="product-description"><span class="product-name">'+data[i].name+'</span><span class="product-size">'+data[i].age+'</span><span class="product-price">Rp. '+data[i].price+',-</span><span class="product-price-disc">Rp. '+data[i].price_disc+',-</span><span class="new-product">NEW</span></div></div></a></div>')	
		}
		
	},
	error:function() {
		console.log('error')
	}
})