var posthtml = require('gulp-posthtml');
var gulp = require('gulp');

gulp.task('build', function() {
    var plugins = [
        // text process
        require('posthtml-textr')({}, [
            require('typographic-single-spaces')
        ]),
        require('posthtml-retext')([
            [require('retext-emoji'), { convert: 'encode' }],
            require('retext-smartypants')
        ]),
        function noBrakeInText(tree) {
            tree.match(/\n\s\w/gim, function (node) {
                return node.replace(/\n\s/gim, ' ');
            })
        },
        // dom process
        require('posthtml-doctype')({ doctype: 'HTML 5' }),
        require('posthtml-custom-elements')(),
        require('posthtml-bem')(),
    ];

    return gulp.src('./pages/**/*.html')
        .pipe(posthtml(plugins))
        .pipe(gulp.dest('./dest'));
});
