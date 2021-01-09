
//created database schema 

const mongoose = require('mongoose'); //requring monnngose db 
const listSchema = new mongoose.Schema({

    des:{

        type :String,
        required:true
    },
    cat :{
   
        type :String,
        required:true

    },

  date:{
        type :String,
        required:true
    }

});
// exporting schema created
const List =  mongoose.model("List",listSchema);
module.exports = List;


