const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

function compilaSass() {
  return gulp
    .src("style/scss/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("style/"))
    .pipe(browserSync.stream());
}

gulp.task("sass", compilaSass);

function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

gulp.task("browser-sync", browser);

function watch() {
  gulp.watch("style/scss/*.scss", compilaSass);
  gulp.watch(["*.html", "*.json"]).on("change", browserSync.reload);
}

gulp.task("watch", watch);

gulp.task("default", gulp.parallel("watch", "browser-sync"));
