// Подключение модулей
// Сам Gulp
const {src, dest, watch} = require('gulp');
// Локальный сервер BrowserSync
const browserSync = require('browser-sync').create();
// Минимизатор CSS
const cleanCSS = require('gulp-clean-css');
// Переименовываем файлы стилей CSS
const rename = require("gulp-rename");
// подключение Sass
const sass = require("gulp-sass");
// Автопрефиксер
const autoprefixer = require('gulp-autoprefixer');

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


function styles() {
  // Рабочий файл CSS
  return src('css/*.css')
  // Минимизация
  .pipe(cleanCSS({
    level: 2
}))
// Переименование с суффиксом мин
.pipe(rename({
  suffix: ".min",
  extname: ".css"
}))
// Путь куда его кладём
  .pipe(dest('dist'))
}

 function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};
 exports.serve = bs;
