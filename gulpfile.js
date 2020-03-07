// Подключение модулей -->
// Gulp
const { src, dest, watch } = require('gulp');
// Локальный сервер BrowserSync
const browserSync = require('browser-sync').create();
// Препроцессор Sass
const sass = require("gulp-sass");
// Автопрефиксер
const autoprefixer = require('gulp-autoprefixer');
// Минимизатор CSS
const cleanCSS = require('gulp-clean-css');
// Переименовываем файлы стилей CSS
const rename = require("gulp-rename");


// Таски --> 
// Сервер BrowserSync
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.scss", serveSass);
    watch("./sass/**/*.sass", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

// Препроцессор Sass + Автопрефиксер + Минимазация CSS + Переименование 
function serveSass() {
    // Откуда берем
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        // Sass
        .pipe(sass())
        // Автопрефиксер
        .pipe(autoprefixer({
            cascade: false
        }))
        // Минимизация
        .pipe(cleanCSS({
            level: 2
        }))
        // Переименование с суффиксом мин
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        // Куда кладем
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};



// Команда 
exports.serve = bs;


