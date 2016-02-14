var should = require('should');
var sinon = require('sinon');

describe('Book Controller Tests:', function(){
    
    describe('Post', function() {
        
        //create mock Book object, with empty save function
        var Book = function(book) {
            this.save = function(){
                //does nothing
            }
        };
        
        //create mock response object, with Sinon Mocking FW
        var res = {
            status: sinon.spy(),
            send: sinon.spy()
        }
        
        //hook it up with book controller, with a mock book
        var bookController = require('../controllers/bookController')(Book);
        
        it('should not allow an empty title on post', function() {

            //create mock request object that has a body
            var req = {
                body: {
                    author : 'Mihaela',
                    genre : 'Fiction'
                }
            }
            
            //call bookController with mock req and res
            bookController.post(req, res);
            
            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);
        })
        
        it('should not allow an empty author on post', function() {

            var req = {
                body: {
                    title : 'Test Title',
                    genre : 'Fiction'
                }
            }
            
            bookController.post(req, res);
            
            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Author is required').should.equal(true); 
        })
        
        it('should not allow an empty genre on post', function() {

            var req = {
                body: {
                    author : 'Mihaela',
                    title : 'Test Title'
                }
            }
            
            bookController.post(req, res);
            
            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Genre is required').should.equal(true); 
        })
        
    })
    
});