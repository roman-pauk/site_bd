var gulp               = require('gulp'),
		less               = require('gulp-less'),
		browserSync        = require('browser-sync'),
		concat             = require('gulp-concat'),
		uglify             = require('gulp-uglify'),
		cleanCSS           = require('gulp-clean-css'),
		rename             = require('gulp-rename'),
		pluginAutoprefix   = require('less-plugin-autoprefix'),
		jshint             = require('gulp-jshint'),
		notify             = require("gulp-notify");

var autoprefix = new pluginAutoprefix({ browsers: ["iOS >= 7", "Chrome >= 30", "Explorer >= 9", "last 2 Edge versions", "Firefox >= 20"] });

//lint js
gulp.task('lint', function() {
	return gulp.src('app/js/common.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});


//Scripts
gulp.task('common-js', ['lint'], function() {
	return gulp.src([
		'app/js/common.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.on("error", notify.onError({message: 'JS error: <%= error.message %>'}))
	.pipe(gulp.dest('app/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/OwlCarousel2/dist/owl.carousel.min.js',

		'app/js/common.min.js' // allways end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // minificate all js
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('styles', function() {
	return gulp.src('app/less/main.less')
		.pipe(less({plugins: [autoprefix]}))
		.on("error", notify.onError({message: 'LESS compile error: <%= error.message %>'}))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(cleanCSS()) // optional
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['styles', 'js', 'browser-sync'], function() {
	gulp.watch('app/less/**/*.less', ['styles']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);