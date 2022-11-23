const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function myTask(cb) {
  console.log("Hello World");
  cb(new Error("Something bad has happened"));
}

function copy(cb) {
  src("routes/*.js").pipe(dest("copies"));
  cb();
}

function generateCSS(cb) {
  src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("public/stylesheets"));
  cb();
}

exports.css = generateCSS;

exports.copy = copy;

exports.myTask = myTask;
