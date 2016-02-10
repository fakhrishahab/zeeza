function route(name, callback){
	var base = $("base").prop("href");
	var fullurl = document.location.href;
	var path = fullurl.replace(base,"");
	var end_point = path.split('.')[0];
	
	if(end_point == name){
		var string = path.split('?')[1];

		var param = string.replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];	

		if(typeof callback == 'function'){
			callback(end_point, param)	
		}			
	}	
}

var script = [
	'./test.js'
]

route('', function(data){
	_cookies.putObject('fakhri', {name:'fakhri',class:'tes'}, 10)
	// console.log(_cookies.getObject('fakhri').name)
// var s = document.createElement("script");
// s.type = "text/javascript";
// s.src = "./script/ test.js";
// console.log(s)
// $("head").append(s);
})

route('product', function(data, param){
	console.log(param)
})