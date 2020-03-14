import gulp from 'gulp';
import PATHS from './../paths';

function assetsRoot() {
  console.log('running: Root assets');
  return gulp.src(PATHS.APP.ROOT.src, { dot: true })
    .pipe(gulp.dest(PATHS.APP.dist));
}

export default assetsRoot;
