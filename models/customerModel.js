const mongoose = require('mongoose'); 

var customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    job:{
        type:String,
    },
    company:{
        type:String,
    },
});

//Export the model
module.exports = mongoose.model('Customer', customerSchema);