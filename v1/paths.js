const appPath = './';
const appPathSrc = appPath + 'src/';
const appPathDist = appPath + 'dist/';
const deployPath = appPath + '../builds/';

const PATHS = {
  APP: {
    dist: appPathDist,
    SASS: {
      entry: appPathSrc + 'styles/app.scss',
      src: appPathSrc + '**/*.scss',
      dest: appPathDist + 'styles/'
    },
    INDEX: {
      src: appPathSrc + 'index.html'
    },
    ROOT: {
      src: appPathSrc + 'root/*.*'
    },
    IMAGES: {
      src: appPathSrc + 'images/**/*.*',
      dest: appPathDist + 'images/'
    },
    FONTS: {
      src: appPathSrc + 'fonts/**/*.*',
      dest: appPathDist + 'fonts/'
    },
    DEPLOY: {
      src: appPathDist + '**/*.*',
      dest: deployPath
    }
  }
};

export default PATHS;