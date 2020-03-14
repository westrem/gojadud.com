import gulp from 'gulp';
import PATHS from './../paths';

function assetsImages() {
  console.log('running: Image assets');
  return gulp.src(PATHS.APP.IMAGES.src)
    .pipe(gulp.dest(PATHS.APP.IMAGES.dest));
}

export default assetsImages;
