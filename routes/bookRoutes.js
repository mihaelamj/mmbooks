var express = require('express');

var routes = function(Book) {
    
    var bookRouter = express.Router();

    bookRouter.route('/')
    
        .post(function(req, res){
            
            var book = new Book(req.body);
            console.log(book);
            console.log(req.body);

            book.save();
            //201 - created
            res.status(201).send(book);

        })
        
        .get(function(req,res){

            var query = {};

            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            Book.find(query, function(err, books){
                if (err) {
                    res.status(500).send(err);
                } else {
                   res.json(books); 
                }  
            });
        });

//insert middleware
    bookRouter.use('/:bookId', function(req, res, next) {
        
        Book.findById(req.params.bookId, function(err, book) {
            if (err) {
                res.status(500).send(err);    
            } else if (book) {
                //add book to request
                req.book = book;  
                next(); 
            } else {
                res.status(404).send('No book found');
            }
        });
    });
//middleware
    
    bookRouter.route('/:bookId')
    
     .get(function(req, res){
            //use middleware inserted book
            res.json(req.book); 
       })
        
       .put(function(req, res) {
            req.book.title = req.body.title;
            req.book.author = req.body.author;
            req.book.genre = req.body.genre;
            req.book.read = req.body.read;
           //save async
           req.book.save(function(err) {
               if (err) {
                   //send error
                   res.status(500).send(err);
               } else {
                   //send book
                   res.json(req.book);
               }
           });
       })
            
       .patch(function(req, res) {
           //ignore _id fiels
           if (req.body._id) {
               delete(req.body._id);
           }
           //update only fileds in req
           for (var field in req.body) {
               req.book[field] = req.body[field];
           }
           //save async
           req.book.save(function(err) {
               if (err) {
                   //send error
                   res.status(500).send(err);
               } else {
                   //send book
                   res.json(req.book);
               }
           });
                
       })
       
       .delete(function(req, res) {
          req.book.remove(function(err) {
              if (err) {
                  //send error
                  res.status(500).send(err);
              } else {
                  //send removed status
                  res.status(204).send('removed');
              }
          }); 
       });
            
    return bookRouter;
};

module.exports = routes;