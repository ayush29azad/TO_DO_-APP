// creating database

const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/to_do_db');
const db = mongoose.connection;

db.on('error',console.error.bind("error on db connection"));
db.once('open',function(){

console.log("Succesfully Connected to DB");

});





