const express = require('express');
const mongoose = require('mongoose') ;
const bodyParser =require('body-parser')
const PORT = process.env.PORT || 5000
const User = require("./model/User")
const app = express();
const cors = require('cors');
require("dotenv/config");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

try{
    mongoose.connect(
    process.env.DB_CONNECTION
    ,{useNewUrlParser : true}
    , () => console.log("connect to data base")) 
    }
catch (err) {
    console.error(err.message);
    process.exit(1);
}

app.use('/users', require('./routes/users'));




app.listen(PORT, ()=>{
    console.log(`Server runing on port ${PORT}`)});