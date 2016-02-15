# mmbooks
node.js REST Test

## Intro

This is a playgorund for a Plurasight course:
#####RESTful Web Services with Node.js and Express
by Johnatan Mills

###REST Verbs
* GET - requests data (a list of objects or a specific object)
* POST - adds data
* DELETE - removes data
* PUT - updates/replaces data (updates the entire resource)
* PATCH - updates just a piece of a resource/data

###HATEOS
Hypermedia as the Engine of Application State.
That means that in each request will be a set of hyperlinks that you can use to navigate the API.

##Initial App Setup
1. Make package file with npm init
2. Make app.js file
3. Install Express (npm install express --save)
4. use express
5. Install Gulp globally to be able to access it from the command line (npm install gulp -g --save)
6. Make gulpfile.js
7. Install nodemon for gulp (npm install gulp-nodemon --save)
8. Setup gulp task to run nodemon

##Data
1. Create a router
2. Install mongoDB and mongoose
3. Run mongoDB

##Query
* /api/book?genre=History
	* Express return it as:
		* req.query = {genre: 'History'}


##Post
* Install bodyParser

Use PostMan and use x-wwww-form-urlencoded, because we use
app.use(bodyParser.urlencoded({extended:true}));

##Refactor
Put BookRouter in it's own module.

##Other verbs
Implement:

* GET
* PUT
* DELETE
* PATCH


##Controllers
Make controllers for pluggable router implementation.

##Testing with Mocha
* Install Mocha for Gulp, and Should and Sinon. (npm install gulp-mocha should sinon --save) 
	* Mocha is javascript test framework.
	* Should is BDD style assertions for node.js
	* Sinon provides standalone test spies, stubs and mocks for JavaScript
	* Supertest is Super-agent driven library for testing node.js HTTP servers using a fluent API
* Make test controllers
* Run it with Gulp (set it up in gulpfile.js) 
* Call test with gulp test

##Integration testing
1. Install Supertest (npm install supertest --save-dev)
2. Install gulp-env to manipulate enviroment variables (npm install gulp-env --save-dev)
3. Set env vars in gulpfile
4. Set test env in app.js (mongo db)
5. Create integration test file
6. Export app from app.js, for Supertest to be able to use it

##HATEOS
Hypermedia as the Engine of Application State.

Makes API self-documenting.

* Add hyperlinks to our model, in controller;
* Add links to returned books, first to self, in controller.
* Add links in routes. 







