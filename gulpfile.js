var gulp = require('gulp');
var webserver = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var url = require('url');
var pathname= JSON.parse(fs.readFileSync(path.join(__dirname,'App/Data/data.json')).toString());
gulp.task("server",function () {
	gulp.src('./')
	.pipe(webserver({
		livereload:true,
		port:8888
	}))
})



gulp.task("webserver",function () {
	gulp.src('./')
	.pipe(webserver({
		livereload:true,
		port:8887,
		middleware:function(req,res,next){
			res.writeHeader(200,{
				'Access-Control-Allow-Origin':'*',
				'content-type':'text/json'
			})
			var obj= url.parse(req.url);
			console.log(obj.pathname);
			var id= obj.pathname.split("/")[1];
			if(req.url=="/data"){
				res.end(JSON.stringify(pathname));
			}
			pathname[0].main.map(function(elem) {
				if(elem.id==id){
					var arr=elem;
					res.end(JSON.stringify(arr));

				}
			})

		}
	}))
})


gulp.task('default',function(){
	gulp.start('server','webserver');
})