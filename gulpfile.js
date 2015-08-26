var gulp = require('gulp');
var compressor = require('gulp-compressor');
gulp.task('build', function() {
    gulp.src('./src/*.html')
        .pipe(compressor({
            'remove-intertag-spaces': true,
            'simple-bool-attr': true,
            'compress-js': true,
            'compress-css': true
        }))
        .pipe(gulp.dest('./'));
});
