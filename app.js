var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator')
var mongojs = require('mongojs')
var db = mongojs('tagtical',['events']);
var ObjectId = mongojs.ObjectId;

var app = express();


/* Middleware
var logger = function(req,res,next){
    console.log('Logging...');
    next();
}

app.use(logger);
*/

//View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static Path
app.use(express.static(path.join(__dirname, 'public')));

//Global Vars
app.use(function(req,res,next){
    res.locals.errors = null;   
    next();
})


//Express Validator Middleware
app.use(expressValidator()); 



app.get('/',function(req,res){
    db.events.find(function(err,docs){
        console.log(docs)
        
        res.render('index',{
            title: 'Customers', 
            users : docs
        });
    
    })

    
});

app.post('/users/add',function(req,res){
    
    req.checkBody('first_name','First Name required').notEmpty();
    req.checkBody('last_name','Last Name required').notEmpty();
    req.checkBody('email','Email required').notEmpty();

    var errors = req.validationErrors();

    if(errors){

        db.events.find(function(err,docs){
            console.log(docs)
            
            res.render('index',{
                title: 'Customers', 
                users : docs,
                errors: errors
            });
        
        })
        

    } else{
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,        
        }
        console.log(newUser)

        db.events.insert(newUser,function(err,result){
            if(err){
                console.log(err);
            }
            res.redirect('/');
        });

        console.log('SUCCESS');
    }

    
})

app.delete('/users/delete/:id',function(req,res){
    db.events.remove({_id: ObjectId(req.params.id)},function(err,result){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
});

app.listen(3000, function(){
    console.log('Server Started on Port 3000')
})