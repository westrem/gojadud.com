import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import replace from 'gulp-replace';
import autoprefixer from 'gulp-autoprefixer';

import PATHS from './../paths';
import VERSION from './../version';

const sass = gulpSass(dartSass);

function processSass() {
  console.log('running: Sass');
  return gulp.src(PATHS.APP.SASS.entry)
    // .pipe(replace('{*version*}', VERSION))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(PATHS.APP.SASS.dest));
}

export default processSass;
