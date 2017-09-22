const wbBuild = require('workbox-build');
const gulp = require('gulp');

gulp.task('bundle-sw', () => {
  return wbBuild
    .generateSW({
      globDirectory: './src/',
      swDest: './dist/sw.js',
      globPatterns: ['**/*.{html,js,css,wav}']
    })
    .then(() => {
      console.log('Service worker generated.');
    })
    .catch(err => {
      console.log('[ERROR] This happened: ' + err);
    });
});
