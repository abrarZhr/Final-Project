const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt =require("bcrypt");
const Image = require('./Image').schema;
const City = require('./City').schema;
const Schema=mongoose.Schema


const UserSchema = new Schema({
    email :{
        type:String,
        required: [true , 'please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail , 'please enter a valid email']
    },
    password :{
        type:String,
        required:[true , 'please enter an password'],
        minlength:[6 , 'minimum password length is 6 chracters']
    },

    UserType :{
        type:String ,
        enum :['user' , 'admin'] ,
        default:'user',
    },

    images :[Image]

})


//fire a function after doc saved ti db 
UserSchema.post('save', function (doc , next){
    console.log('new user was create & saved' ,doc);
    next(); 
    
    })
const User = mongoose.model('user',UserSchema);
module.exports=User;