// 引入gulp
var gulp = require("gulp"),
//编译sass
	sass = require("gulp-sass"),
//检测、运行本地web服务器
	server = require("gulp-webserver"),
//引入合并插件
	concat = require("gulp-concat"),
//压缩js
	uglify = require('gulp-uglify'),
//重命名
	rename = require('gulp-rename'),
//更改版本名  加MD5后缀
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	minifyHTML   = require('gulp-minify-html'),
//编译模块板块
	browser = require("gulp-browserify");
//编译scss样式添加到css中
gulp.task("sass",function(){
	return gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("css/"))
});
//监测本地中的所有scss文件，有改变时就自动编译
gulp.task("server",function(){
	gulp.watch("sass/*.scss",["sass"]);
	return gulp.src("./")
		.pipe(server({
			livereload:true,
			directoryListing:true,
			open:true
		}));
});

gulp.task("default",["sass","server"]);