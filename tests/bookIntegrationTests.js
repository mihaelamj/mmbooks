//import should BDD test
var should = require('should');
//import supertest
var supertest = require('supertest');
//need to import app
var app = require('../app.js');
//and db
var mongoose = require('mongoose');
//model
var Book = mongoose.model('Book')
//make agent
var agent = supertest.agent(app);

//make CRUD test
describe('Book CRUD Test', function(){
    
    it('Should allow a book to be posted and return a read and _id', function(done){
        
        //make body for request to post
        var bookPost = {
            title:'New Book', 
            author:'Mihaela', 
            genre:'Fiction'
            };
            
        //do the work
        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end(function(err, results) {
                //assert/assume
                results.body.read.should.equal(false);
                //to make a test fail -> results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                //let supertest know that this test is done
                done();
            })
        
    })
    
    //clean up db after each test
    afterEach(function(done) {
        Book.remove().exec();
        done();
    })
    
})