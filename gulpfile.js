"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps")
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var cheerio = require("gulp-cheerio")

gulp.task("css", function () {
  return gulp.src("src/scss/main.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("main.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"));
})

gulp.task("imagemin", function () {
  return gulp.src("src/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("src/img"));
})

gulp.task("webp", function () {
  return gulp.src("src/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("src/img"))
})

gulp.task("sprite", function () {
  return gulp.src("src/img/icon-*.svg")
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgstore({
      inlineSvg: true,
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("src/img"))
})

gulp.task("html", function () {
  return gulp.src("src/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"))
})

gulp.task("js", function () {
  return gulp.src("src/js/**/*.js")
    .pipe(gulp.dest("build/js"))
})

gulp.task("server", function () {
  server.init({
    server: "build/"
  });

  gulp.watch("src/scss/**/*.{sass,scss}", gulp.series("css", "refresh"));
  gulp.watch("src/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("src/js/**/*.js", gulp.series("js", "refresh"));
  gulp.watch("src/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
})

gulp.task("copy", function () {
  return gulp.src([
      "src/fonts/**/*.{woff2,woff}",
      "src/img/**",
      "src/js/**",
      "src/*.ico"
    ], {
      base: "src"
    })
    .pipe(gulp.dest("build"));
})

gulp.task("clean", function () {
  return del("build");
})

gulp.task("build", gulp.series("clean", "copy", "css", "sprite", "html"));
gulp.task("start", gulp.series("build", "server"));
