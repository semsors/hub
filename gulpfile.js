var path = require('path'),

    gulp    = require('gulp'),
    less    = require('gulp-less'),
    nodemon = require('gulp-nodemon');


gulp.task('less:compile', function () {
    return gulp.src([
            path.join(__dirname, 'less/hub.less')
        ])
        .pipe(less({
            paths: [
                path.join(__dirname, 'bower_components')
            ],
            compress: true
        }))
        .pipe(gulp.dest(path.join(__dirname, 'public/styles')));
});

gulp.task('watch', ['less:compile'], function () {
    nodemon({
        script: 'index.js',
        ext: 'js less',
        tasks: ['less:compile']
    });
});


gulp.task('default', ['watch']);
