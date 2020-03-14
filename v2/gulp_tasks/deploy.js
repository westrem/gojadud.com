import gulp from 'gulp';
import PATHS from './../paths';
import { buildDir } from './../version';

function deploy() {
  console.log('running: Deploy');
  return gulp.src(PATHS.APP.DEPLOY.src)
    .pipe(gulp.dest(PATHS.APP.DEPLOY.dest + buildDir));
}

export default deploy;
