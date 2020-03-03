// Подключение модулей -->
// Сам Gulp
const gulp = require('gulp');
// Локальный сервер BrowserSync
const browserSync = require('browser-sync').create();
// Минимизатор CSS
const cleanCSS = require('gulp-clean-css');
// Переименование файлов CSS
const rename = require("gulp-rename");




// Cервер BrowserSync 
function localbrowser() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
};



//Таск на стили CSS
function styles() {
    // Берем рабочий файл CSS
    return gulp.src('src/css/*.css')

        //Минификация CSS
        .pipe(cleanCSS({
            level: 2
        }))

        // Переименование файла 
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))

        // Кладем готовый файл CSS
        .pipe(gulp.dest('build/css'))
}



// Название тасков -->
// Таск - Локальный сервер BrowserSync
gulp.task('b-s', localbrowser);
// Таск - Стили CSS 
gulp.task('styles', styles);


