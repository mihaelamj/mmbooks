# mmbooks
node.js REST Test

## Intro

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
/api/book?genre=History
Express return it as:
req.query = {genre: 'History'}


##Post
1. Install bodyParser

Use PostMan and use x-wwww-form-urlencoded, because we use
app.use(bodyParser.urlencoded({extended:true}));

##Refactor
Put BookRouter in it's own module.

##Other verbs
Implement:
1. GET
2. PUT
3. DELETE
4. PATCH





