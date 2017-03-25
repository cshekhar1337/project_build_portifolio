
var gulp = require('gulp') ;
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');

var srcpaths = {
	scripts: ['js/*.js'],
	images: ['images/*'],
	content: ['index_page.html'],
	css : ['css/*']
};

gulp.task('scripts', function() {
       gulp.src(srcpaths.scripts)
            .pipe(uglify())
            .pipe(gulp.dest('dist/js/'));

});

gulp.task('content', function(){
	gulp.src(srcpaths.content)
		.pipe(minifyhtml())
		.pipe(gulp.dest('dist/'));
});

gulp.task('styles', function(){
	gulp.src(srcpaths.css)
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('images', function() {
	return gulp.src(srcpaths.images)
				.pipe(imagemin())
				.pipe(gulp.dest('dist/images/'))
			});

// Watches for changes to our files and executes required scripts
gulp.task('watch', function() {
	gulp.watch(srcpaths.scripts, ['scripts']);
	gulp.watch(srcpaths.content, ['content']); 
	gulp.watch(srcpaths.images, ['images']);
	gulp.watch(srcpaths.css, ['styles']);
});





gulp.task('default', ['watch']);
