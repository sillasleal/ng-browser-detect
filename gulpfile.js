/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var stripComments = require("gulp-strip-comments");
var directorySync = require("gulp-directory-sync");
var uglify = require("gulp-uglify");
var js = [
    "./src/browser-detect.js",
    "./src/browser-detect-factory.js",
    "./src/browser-detect-directive-class.js"
];

gulp.task("test", function () {
    gulp
            .src("./src")
            .pipe(directorySync(
                    "./src",
                    "./public_html/dest",
                    {
                        printSummary: true
                    }
            ));
});

gulp.task('build', function () {
    return gulp
            .src(js)
            .pipe(stripComments())
            .pipe(uglify())
            .pipe(concat("browser-detect.min.js", {
                newLine: ""
            }))
            .pipe(gulp.dest("./dest"));
});

gulp.task("watch", function(){
    gulp.watch("./src/*", ["test"]);
});

gulp.task("default", [
   "watch"
]);
