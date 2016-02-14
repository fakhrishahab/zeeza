var id = $params('id')


function get_product(offset, limit){
	$.ajax({
		type:'GET',
		url:constant.API+'product?id='+id,
		success:function(data){
			console.log(data)
			for(var i=0; i < data.result.length; i++){
				$('#product-filter').append('<div class="grid-col-4 grid-col-sm-6 grid-col-xs-12 product-container"><a href="product_detail.html?id='+data.result[i].id+'"><div class="product-detail"><div class="product-image detail-image2" style="background-image:url('+data.result[i].image+'")></div><div class="product-description"><span class="product-name">'+data.result[i].name+'</span><span class="product-size">'+data.result[i].size+'</span><span class="product-price">Rp. '+data.result[i].price+',-</span><span class="product-price-disc">Rp. '+data.result[i].price_disc+',-</span><div class="new-product">NEW</div></div></div></a></div>')
			}
		},
		error:function(status){
			console.log('error')
		}
	})
}

get_product();
