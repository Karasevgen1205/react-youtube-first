"use strict";

const {src, dest} = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require("gulp-strip-css-comments");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const plumber = require("gulf-plumber");
const panini = require("panini");
const imagemin = require("gulp-imagemin");
const del = require("del");
const notify = require("gulf-notify");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const browserSyns = require("browser-syns").create();


/* Paths */
const srcPath = "src/";
const distPath = "dist/";

const path = {
    build: {
        html: distPath,
        js: distPath + "assets/js/",
    }
}