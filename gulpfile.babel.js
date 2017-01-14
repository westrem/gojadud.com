import gulp from 'gulp';
import PATHS from './paths';

// tasks
import clean from './gulp_tasks/clean';
import assetsFonts from './gulp_tasks/assetsFonts';
import assetsImages from './gulp_tasks/assetsImages';
import processSass from './gulp_tasks/sass';
import htmlIndex from './gulp_tasks/htmlIndex';
import assetsRoot from './gulp_tasks/assetsRoot';
import deploy from './gulp_tasks/deploy';

gulp.task('clean', clean);
gulp.task('sass', processSass);
gulp.task('index', htmlIndex);
gulp.task('fonts', assetsFonts);
gulp.task('images', assetsImages);
gulp.task('root', assetsRoot);
gulp.task('deploy', deploy);

gulp.task('build',
  [
    'sass',
    'index',
    'images',
    'fonts',
    'root'
  ],
  () => {}
);

gulp.task('watch',
  () => {
    gulp.watch(PATHS.APP.SASS.src, ['sass']);
    gulp.watch(PATHS.APP.INDEX.src, ['index']);
    gulp.watch(PATHS.APP.IMAGES.src, ['images']);
    gulp.watch(PATHS.APP.FONTS.src, ['fonts']);
    gulp.watch(PATHS.APP.ROOT.src, ['root']);
  }
);


