var code = $params('code'),
	dataProduct = '',
	page = 0,limit=12,offset=0,opened=0,total=0;


function get_product(offset, limit){
	$.ajax({
		type:'GET',
		url:constant.API+'product/search?code='+code+'&offset='+offset+'&limit='+limit,
		success:function(data){
			total = data.count;
			opened = data.result.length;
			dataProduct = data;
			if(data.result.length > 0){
				$('#product-filter-search').append('<h3>Search product : '+code+'</h3>')
				generateView(data)
				
			}else{
				$('#product-filter-search').append('<h3>Search product : '+code+'</h3><br/><h2>Data Not Found</h2>');
			}
			check_pagination(total);
			
		},
		error:function(status){
			$('#product-filter-search').append('<h3>Search product : '+code+'</h3><br/><h2>Search data Error</h2>');
		}
	})
}

function check_pagination(total){
	var prev = $('button#btn-prev')
	var next = $('button#btn-next')
	var total_page = parseInt(total/limit);

	if(page <= 0){
		if(total_page > 1){
			$('button#btn-next').prop('disabled', false)
		}
		$('button#btn-prev').prop('disabled', true)		
	}else{
		$('button#btn-prev').prop('disabled', false)		
		if(page < parseInt(total_page-1)){
			$('button#btn-next').prop('disabled', false)		
		}else{
			$('button#btn-next').prop('disabled', true)		
		}
	}
}

$('.padding-num button').click(function(){
	if($(this).attr('id') == 'btn-prev'){
		page -= 1;
		get_product(limit*page, limit)
	}else{
		page += 1;
		get_product(limit*page, limit)
	}	
})

$('select[name=sort_product]').on('change', function(){
	switch($(this).val()){
		case constant.SORT.PRICE_MIN :
			dataProduct.result = _.sortBy(dataProduct.result, 'price_disc');
			break;
		case constant.SORT.PRICE_MAX :
			dataProduct.result = _.sortBy(dataProduct.result, 'price_disc').reverse();
			break;
		case constant.SORT.PRODUCT_NEW :
			dataProduct.result = _.sortBy(dataProduct.result, 'created_date');
			break;
		default :
			console.log('default')
			break;
	}

	generateView(dataProduct)
})

function generateView(data){	
	$('#product-filter-search').empty();
	for(var i=0; i < data.result.length; i++){
		if(diffDay(data.result[i].created_date) < 30){
			var newProduct = '<span class="new-product">NEW</span>'
		}else{
			newProduct = '';
		}
		$('#product-filter-search').append('<div class="grid-col-4 grid-col-sm-6 grid-col-xs-12 product-container"><a href="product_detail.html?id='+data.result[i].id+'"><div class="product-detail"><div class="product-image detail-image2" style="background-image:url('+data.result[i].image+'")></div><div class="product-description"><span class="product-name">'+data.result[i].name+'</span><span class="product-size">'+data.result[i].size+'</span><span class="product-size">RES  : '+data.result[i].price_reseller+'</span><span class="product-price">Rp. '+data.result[i].price+',-</span><span class="product-price-disc">Rp. '+data.result[i].price_disc+',-</span><span class="product-code">CODE : '+data.result[i].code+'</span>'+newProduct+'</div></div></a></div>')
	}
}

get_product(offset, limit);

