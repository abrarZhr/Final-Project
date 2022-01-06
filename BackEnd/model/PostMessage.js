const mongoose = require('mongoose');


const Schema=mongoose.Schema

const PostMessage = new Schema({
    title:String,
    message:String,
    creator:String,
    tags :[String] ,
    selectedFile :String ,
    likeCount :{
        type:Number,
        default:0
    },

    createdAt :{
        type :Date ,
        default : new Date()

    }

})

const postMessage = mongoose.model('Post' , PostMessage);
module.exports= postMessage;