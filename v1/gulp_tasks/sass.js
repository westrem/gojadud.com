import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

import PATHS from './../paths';

function processSass() {
  console.log('running: Sass');
  gulp.src(PATHS.APP.SASS.entry)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(PATHS.APP.SASS.dest));
}

export default processSass;
