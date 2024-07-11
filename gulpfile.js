const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss') //recupera os arquivos scss
        .pipe(sass({outputStyle: 'compressed'})) //compila o sass
        .pipe(gulp.dest('./dist/css')); //envia os arquivos compilados à pasta de destino
}

exports.default = styles;
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}