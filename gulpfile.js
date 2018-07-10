var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
	return gulp.src('app/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
	gulp.watch('app/scss/main.scss', ['sass']);
	// Other watchers
})

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
})