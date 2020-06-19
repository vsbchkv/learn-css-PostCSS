const { gulp, watch, series, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const server = require('browser-sync');
const postcss = require('gulp-postcss');
const doiuse = require('doiuse');
const cssNext = require('postcss-cssnext');
const webp = require('gulp-webp');
const cssImport = require('postcss-import');
const cssNano = require('cssnano');

// path
const config = {
  // html
  views: {
    src: 'views/**/index.html',
    dest: 'build/'
  },
  // css
  styles: {
    components: 'styles/*/*.css',
    src: 'styles/*.css',
    dest: 'build/'
  },
  // icons
  sprite: {
    src: 'media/icons/*.svg',
    dest: 'build/'
  },
  // img
  images: {
    src: 'media/images/*',
    dest: 'build/images/'
  }
};

// markup
function html() {
  return src(config.views.src)
    .pipe(plumber())
    .pipe(dest(config.views.dest))
    .pipe(server.stream());
}

// styles
function css() {
  return src(config.styles.src)
    .pipe(plumber())
    .pipe(postcss(
      [
        cssImport(),
        cssNext(),
        cssNano(),
        doiuse({
          browsers: [
            '> .5% and last 2 versions',
            'not dead',
            "not OperaMini all",
            'ie >= 11',
            'Edge >= 11',
          ],
          ignore: [
            'will-change',
            'object-fit',
            'rem',
          ],
          onFeatureUsage: function (usageInfo) {
            console.log(usageInfo.message)
          }
        }),
      ]))
    .pipe(dest(config.styles.dest))
    .pipe(server.stream());
}

//webp
function toWebp() {
  return src(config.images.src)
  .pipe(webp())
  .pipe(dest(config.images.dest));
}

function imgCopy() {
  return src(config.images.src)
  .pipe(dest(config.images.dest));
}

function load() {
  server.init({
    server: {
      baseDir: 'build/'
    }
  });
}

function watchTask() {
  watch(
    [config.views.src, config.styles.components, config.styles.src, config.images.src],
    parallel(html, css, toWebp, imgCopy)
  );
}

// default command: Gulp
  parallel(html, css, toWebp, imgCopy)
  exports.default = series(parallel(html, css, watchTask, toWebp, imgCopy, load));
