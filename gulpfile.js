var posthtml = require('gulp-posthtml');
var gulp = require('gulp');

gulp.task('build', function() {
    var plugins = [
        require('posthtml-doctype')({ doctype: 'HTML 5' }),
        require('posthtml-custom-elements')(),
        require('posthtml-textr')({}, [
            require('typographic-ellipses'),
            require('typographic-single-spaces')
        ])
    ];

    return gulp.src('./pages/**/*.html')
        .pipe(posthtml(plugins))
        .pipe(gulp.dest('./dest'));
});
