var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
//add mocha
var gulpMocha = require('gulp-mocha');
//add env
var env = require('gulp-env');
//add supertest
var supertest = require('supertest');

//setup gulp task
gulp.task('default', function() {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function() {
        console.log('Restarting');
    });
});

//create a test task
gulp.task('test', function(){
    
    //set enviroment variables - test
     env({vars: {ENV:'Test'}});
     
    //add source files
    gulp.src('tests/*.js', {read: false})
        .pipe(gulpMocha({reporter: 'nyan'}))
    
});