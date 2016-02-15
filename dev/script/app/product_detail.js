var id = $params('id');

$.ajax({
	method : 'GET',
	url:constant.API+'product/detail?id='+id,
	success:function(data){
		var wrapper = $('#section-product');
		var newProduct = '';
		if(diffDay(data[0].created_date) < 30){
			var newProduct = '<div class="new-product">NEW PRODUCT</div>'
		}

		$('.product-header', wrapper).append('<h1>'+data[0].name+'</h1>')
		$('.grid-container .row', wrapper).append('<div class="grid-col-5 grid-col-sm-12"><div class="product-detail product-detail-desc"><div class="product-image detail-image" style="background-image:url('+data[0].image+')"></div></div></div><div class="grid-col-7 grid-col-sm-12"><div class="product-description-detail">'+newProduct+'<div class="code-product">CODE : '+data[0].code+'</div><span class="product-name">'+data[0].name+'</span><span class="product-description">'+data[0].description+'</span><span class="product-size">Tersedia untuk ukuran '+data[0].size+'</span><span class="product-size">RES : '+data[0].price_reseller+'</span><span class="product-price">Rp. '+data[0].price+',-</span><span class="product-price-disc">Rp. '+data[0].price_disc+',-</span><div class="btn-buy-now" onClick=window.location.href="information.html?id=1">Beli sekarang</div></div></div>');
	},
	error:function(){
		console.log('error')
	}
})