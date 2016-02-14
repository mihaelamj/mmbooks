//plug Book
var bookController = function(Book){
    
    var post = function(req, res) {
        var book = new Book(req.body);
        
        //check for title
        if (!req.body.title) {
            res.status(400);
            res.send('Title is required');
        } else if (!req.body.author) {
            res.status(400);
            res.send('Author is required');            
        } else if (!req.body.genre) {
            res.status(400);
            res.send('Genre is required');            
        } else {
            book.save();
            res.status(201);
            res.send(book);   
        }
    }
    
    var get = function(req, res) {
        
        var query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query, function(err, books){
            if (err) {
                res.status(500);
                res.send(err);
            } else {
                
                //HATEOS - add hyperlinks
                var returnBooks = [];//make ampty array
                books.forEach(function(element, index, array) {
                    //copy the Mongoose module into a new object
                    var newBook = element.toJSON();
                    //add links to book copy
                    newBook.links = {};
                    //add link to self
                    newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
                    //save
                    returnBooks.push(newBook);
                    
                }, this);
                
                //response
                // res.json(books); 
                //return our hyperlinked books
                res.json(returnBooks); 
            }  
        });        
    }
    
    //return our function
    return {
        post : post,
        get : get
    }
};

module.exports = bookController;