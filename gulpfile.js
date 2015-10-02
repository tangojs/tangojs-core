var gulp        = require('gulp')
var babel       = require('gulp-babel')
var concat      = require('gulp-concat')
var esdoc       = require('gulp-esdoc')
var filter      = require('gulp-filter')
var ghPages     = require('gulp-gh-pages');
var plumber     = require('gulp-plumber')
var rename      = require('gulp-rename')
var rollup      = require('gulp-rollup')
var sourcemaps  = require('gulp-sourcemaps')
var uglify      = require('gulp-uglify')
var gutil       = require('gulp-util')
var del         = require('del')

const esdocConfig = require('./esdoc.json')

const CONFIG = {
  sourceGlob: './src/**/*.js',
  entryFile: './src/tangojs.js',
  targetDir: './lib',
  packageName: 'tangojs.js'
}

/**
 * Default task.
 */
gulp.task('default', ['compile'])

/**
 * Deletes target directory.
 */
gulp.task('clean', () =>
  del(CONFIG.targetDir)
)

/**
 * Transpiles and bundles the library.
 *
 * Rollup concatenates ES6 modules properly.
 * Sourcemap generated with first sourcemaps.write() call needs to be dropped
 * in the next step. Otherwise uglifier will try parsing that as a .js file.
 */
gulp.task('compile', () =>
  gulp.src(CONFIG.entryFile, {read: false})
    .pipe(plumber(function (error) {
      gutil.log(error)
      this.emit('end')
    }))
    .pipe(rollup())
    .pipe(sourcemaps.init())
    .pipe(babel({modules: 'umd'}))
    .pipe(concat(CONFIG.packageName))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(CONFIG.targetDir))
    .pipe(filter(file => ! file.path.endsWith('.map')))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(CONFIG.targetDir))
)

/**
 * Trigger compilation when any of .js files changes.
 */
gulp.task('watch', ['compile'], () =>
  gulp.watch([CONFIG.sourceGlob], ['compile'])
)

/**
 * Generate documentation.
 */
gulp.task('docs', () =>
  gulp.src(esdocConfig.source)
    .pipe(esdoc(esdocConfig))
)

/**
 * Publish documentation.
 */
gulp.task('site', ['docs'], () =>
  gulp.src(`${esdocConfig.destination}/**/*`)
    .pipe(ghPages())
)
