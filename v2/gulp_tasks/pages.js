import gulp from 'gulp';
import replace from 'gulp-replace';
import htmlmin from 'gulp-htmlmin';
import PATHS from './../paths';
import VERSION from './../version';

function pages() {
  console.log('running: Pages');
  return gulp.src(PATHS.APP.PAGES.src)
    // .pipe(replace('{*version*}', VERSION))
    // .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(PATHS.APP.PAGES.dest));
}

export default pages;
