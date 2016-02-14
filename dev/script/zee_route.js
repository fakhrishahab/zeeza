var localCache = {
    data: {},
    remove: function (url) {
        delete localCache.data[url];
    },
    exist: function (url) {
        return localCache.data.hasOwnProperty(url) && localCache.data[url] !== null;
    },
    get: function (url) {
        console.log('Getting in cache for url ' + url);
        return localCache.data[url];
    },
    set: function (url, cachedData, callback) {
        localCache.remove(url);
        localCache.data[url] = cachedData;
        if ($.isFunction(callback)) callback(cachedData);
    }
};

var globalScript = [
	'lib/underscore-min.js',
	'script.js',
	'zee_cookies.js'
]

function route(name, config){
	var base = $("base").prop("href");
	var fullurl = document.location.href;
	var path = fullurl.replace(base,"");
	var end_point = path.split('.')[0];
	
	if(end_point == name){

		var string = path.split('?')[1];
		
		if(string){
			var param = string.replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];		
		}		

		if(typeof callback == 'function'){
			callback(end_point, param)	
		}			


		var script='';
		for(var x=0; x<globalScript.length;x++){
			script += '<script src="./script/'+globalScript[x]+'"></script>'
		}

		for(var i=0; i < config.script.length;i++){
			script += '<script src="./script/'+config.script[i]+'"></script>'
		}
		$('body').append(script);
	}	
	
	// var script2='';
	// for(var i=0; i<config.script.length;i++){
	// 	script2 += '<script src="./script/'+config.script[i]+'"></script>'
	// }
	// $('body').append(script2);

	
}

route('',{
	script : [
		'app/home.js'
	]
})

route('product', {
	script : [
		'app/product.js'
	]
})

route('product_detail', {
	script : [
		'app/product_detail.js'
	]
})

route('information', {
	script : [
		'app/information.js'
	]
})