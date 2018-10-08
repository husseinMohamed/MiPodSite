var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
   return gulp.src('./src/Assets/sass/*.scss')
   .pipe(sass())
   .pipe(gulp.dest('./src/Assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('./src/Assets/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

