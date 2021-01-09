const express = require("express");  
const path = require('path');
const port = 9000;
const db = require('./config/mongoose'); // requiring mongoose db
const List = require('./models/schema'); // requiring schema file
const app = express();

//setting up view engine
app.set('views engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded());
app.use(express.static('assets'));


// creating object array 
var dolist = [
{

des:"codechef",
cat:"Personal",
date:"12/25/2020"

},
{
des:"codeforces",
cat:"Work",
date:"12/25/2020"

}
]

// get info from databse to show on '/' url 
app.get("/",function(req,res)
{
List.find({},function(err,i){
   if(err)
    {
        console.log("error in fetching list from  database");
        return ;
    }
return res.render('list.ejs',{

do_list:i
});

});
});

// push data into database
app.post('/push',function(req,res)
{
List.create({
des:req.body.des,
cat:req.body.cat,
date:req.body.date

}, function(err,newList){

    if(err)
    {
        console.log("error in creating database");
        return ;
    }

    console.log("********",newList);
    return res.redirect('back');
});



});
//deleting the  cards which is checked  
app.get('/delete-todo',(req,res)=>{
    let id = req.query.id;
    console.log(id);
    List.deleteMany({_id:{$in:id}},(err,list)=>{
        if(err){
            console.log("Error in deleting a task");
            return;
        }
        return res.redirect('back');
    })
});




// express js server code 
app.listen(9000,function()
{
console.log("listening to port:9000");

});







