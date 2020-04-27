'use strict';

const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    srcCSS: './src/scss/**/*',
    srcCSSMain: './src/scss/main.scss',
    distCSS: './dist/css/'
};


function css() {
    let plugins = [
        autoprefixer(),
        cssnano()
    ];

    return src(paths.srcCSSMain)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(dest(paths.distCSS))

        .pipe(postcss(plugins))
        .pipe(rename((path) => {
            path.basename += ".min";
        }))
        .pipe(dest(paths.distCSS))
}

function looking() {
    return watch(paths.srcCSS, css);
}

exports.css = css;
exports.watch = looking;
exports.default = css;