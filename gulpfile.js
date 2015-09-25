var posthtml = require('gulp-posthtml');
var gulp = require('gulp');

gulp.task('build', function() {
    var plugins = [
        require('posthtml-custom-elements')()
    ];

    return gulp.src('./pages/*.html')
        .pipe(posthtml(plugins))
        .pipe(gulp.dest('./dest'));
});
