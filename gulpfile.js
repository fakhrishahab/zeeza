var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	del = require('del');


var defaultTasks = [
	'html_view',
	'style_sass',
	'fonts',
	'script',
	'images'
]

gulp.task('html_view', function(){
	return gulp.src('./dev/app/**/*.*')
		.pipe(gulp.dest('public/'))
})

gulp.task('style_sass', function(){
	return gulp.src('./dev/assets/styles/scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(sass.sync().on('Error', sass.logError))
		.pipe(gulp.dest('public/assets/./styles'))
})

gulp.task('fonts', function(){
	return gulp.src('./dev/assets/fonts/**/*.*')
		.pipe(gulp.dest('public/assets/fonts'))
})

gulp.task('script', function(){
	return gulp.src('./dev/assets/script/**/*.*')
		.pipe(gulp.dest('public/assets/script'))
})

gulp.task('images', function(){
	return gulp.src('./dev/assets/images/**/*.*')
		.pipe(gulp.dest('public/assets/images'))
})

gulp.task('clean', function(cb){
	del(defaultTasks, cb)
})

gulp.task('watch', function(){
	gulp.watch('./dev/app/**/*.*', ['html_view'])
	gulp.watch('./dev/assets/styles/scss/**/*.scss', ['style_sass'])
	gulp.watch('./dev/assets/**/*.*', ['fonts', 'script', 'images'])
})

gulp.task('default', ['clean'])
gulp.task('zeeza', defaultTasks)
gulp.start()