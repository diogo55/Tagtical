var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


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

var users = [
    {
        id : 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@mail.com'
    },
    {
        id : 2,
        first_name: 'Bob',
        last_name: 'Smith',
        email: 'bobsmith@mail.com'
    },
    {
        id : 3,
        first_name: 'Alice',
        last_name: 'Jackson',
        email: 'alij@mail.com'
    }
]


app.get('/',function(req,res){
    res.render('index',{
        title: 'Customers', 
        users : users
    });
});

app.post('/users/add',function(req,res){
    var newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,        
    }

    console.log(newUser)
})

app.listen(3000, function(){
    console.log('Server Started on Port 3000')
})