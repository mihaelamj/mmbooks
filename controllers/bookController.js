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
                res.json(books); 
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