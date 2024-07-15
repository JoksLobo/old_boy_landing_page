const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles(){
    return gulp.src('./src/styles/*.scss') //recupera os arquivos scss
        .pipe(sass({outputStyle: 'compressed'})) //compila o sass
        .pipe(gulp.dest('./dist/css')); //envia os arquivos compilados à pasta de destino
}

function images(){
    return gulp.src('./src/images/**/*') //recupera pega todos os arquivos de imagem
        .pipe(imagemin()) //minifica as imagens
        .pipe(gulp.dest('./dist/images')); //envia as imagens minificadas à pasta de destino
}

exports.default = gulp.parallel(styles, images);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}