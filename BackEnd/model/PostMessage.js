const mongoose = require('mongoose');


const Schema=mongoose.Schema

const PostMessage = new Schema({

    title :{
        type:String,
        required:true

    },
    
    message: {
        type:String,
        required:true
    },
 
    selectedFile : {
       type:String ,
        required:true
    },

    createdAt :{
        type :Date ,
        default : new Date(),
      
    }

})

const postMessage = mongoose.model('Post' , PostMessage);
module.exports= postMessage;