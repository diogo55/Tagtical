const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const items = require('./routes/api/items');
const games = require('./routes/api/games');
const files = require('./routes/static/files');

const app = express();
app.use(express.json());

app.use(cors());


//DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser:true})
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items',items);
app.use('/api/games',games);
app.use('/files',files);

const port = process.env.port || 5000;
    
app.listen(port,() => console.log(`Server started on port ${port}`));