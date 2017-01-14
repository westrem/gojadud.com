import gulp from 'gulp';
import PATHS from './../paths';

function assetsFonts() {
  console.log('running: Font assets');
  return gulp.src(PATHS.APP.FONTS.src)
    .pipe(gulp.dest(PATHS.APP.FONTS.dest));
}

export default assetsFonts;
