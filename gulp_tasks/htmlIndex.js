import gulp from 'gulp';
import replace from 'gulp-replace';
import htmlmin from 'gulp-htmlmin';
import PATHS from './../paths';
import VERSION from './../version';

function htmlIndex() {
  console.log('running: Html Index');
  return gulp.src(PATHS.APP.INDEX.src)
    .pipe(replace('{*version*}', VERSION))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(PATHS.APP.dist));
}

export default htmlIndex;
