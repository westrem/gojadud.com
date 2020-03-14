import del from 'del';
import PATHS from './../paths';

function clean(done) {
  console.log('running: Clean');
  return del([PATHS.APP.dist], done);
}

export default clean;
