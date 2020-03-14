import gulp from 'gulp';
import PATHS from './paths';

// tasks
import clean from './gulp_tasks/clean';
import assetsImages from './gulp_tasks/assetsImages';
import processSass from './gulp_tasks/sass';
import pages from './gulp_tasks/pages';
import assetsRoot from './gulp_tasks/assetsRoot';
import deploy from './gulp_tasks/deploy';

gulp.task('clean', clean);
gulp.task('deploy', deploy);

export const build = gulp.series(processSass, pages, assetsImages, assetsRoot);

export function watch() {
  gulp.watch(PATHS.APP.SASS.src, processSass);
  gulp.watch(PATHS.APP.PAGES.src, pages);
  gulp.watch(PATHS.APP.IMAGES.src, assetsImages);
  gulp.watch(PATHS.APP.ROOT.src, assetsRoot);
}

function emptyDefault() {}

export default emptyDefault;
