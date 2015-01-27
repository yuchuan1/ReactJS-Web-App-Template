# This is a boilerplate for a web application using React.js #

## Install generator-gulp-webapp ##

    Install dependencies: npm install --global yo bower
    Install the generator: npm install --global generator-gulp-webapp
    Run yo gulp-webapp to scaffold your webapp

## Setting up React and JSX ##
    Install gulp-react, a gulp plugin for transforming JSX templates into real JavaScript:
    $ npm install --save-dev gulp-react
    Install React itself as a bower component:
    $ bower install --save react
    Run the wiredep task to insert a script tag into your app/index.html:
    $ gulp wiredep

## Create a templates task ##
    gulp.task('templates', function () {
      return gulp.src('app/scripts/**/*.jsx')
    .pipe($.react())
    .pipe(gulp.dest('.tmp/scripts'));
    });

## Add templates as a dependency of html and connect ##
    gulp.task('html', ['styles', 'templates'], function () {
    ...
    gulp.task('connect', ['styles', 'templates', 'fonts'], function () {
    ...
## Edit your watch task ##
    gulp.task('watch', ['connect'], function () {
       gulp.watch([
     'app/*.html',
     '.tmp/styles/**/*.css',
     'app/scripts/**/*.js',
    +'.tmp/scripts/**/*.js',
     'app/images/**/*'
       ]).on('change', function (file) {
     server.changed(file.path);
       });
    
       gulp.watch('app/styles/**/*.scss', ['styles']);
    +  gulp.watch('app/scripts/**/*.jsx', ['templates']);
       gulp.watch('bower.json', ['wiredep', 'fonts']);
     });

Put your .jsx files anywhere in app/scripts, but include them in your HTML as if they're .js files -- e.g. for app/scripts/foo.jsx, use `<script src="scripts/foo.js"></script>`

- Run gulp serve to preview and watch for changes
- Run bower install --save <packageto install frontend dependencies
- Run gulp to build your webapp for production 