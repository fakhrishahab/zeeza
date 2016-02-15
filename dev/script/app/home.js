$.ajax({
	method:'GET',
	url:constant.API+'product',
	success:function(data){
		console.log(data)
		for(var i =0; i < data.length; i++){
			if(diffDay(data[i].created_date) < 30){
				var newProduct = '<span class="new-product">NEW</span>'
			}else{
				newProduct = '';
			}
			$('#latest_product').append('<div class="grid-col-2 grid-col-sm-6 grid-col-xs-12 product-container"><a href="product_detail.html?id='+data[i].id+'"><div class="product-detail"><div class="product-image" style="background-image:url('+data[i].image+')"></div><div class="product-description"><div class="product-name">'+data[i].name+'</div><span class="product-size">'+data[i].size+'</span><span class="product-size">RES  : '+data[i].price_reseller+'</span><span class="product-price">Rp. '+data[i].price+',-</span><span class="product-price-disc">Rp. '+data[i].price_disc+',-</span><span class="product-code">CODE : '+data[i].code+'</span>'+newProduct+'</div></div></a></div>')	
		}
		
	},
	error:function() {
		console.log('error')
	}
})