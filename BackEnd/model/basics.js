const mongoose = require('mongoose');
const { schema } = require('./Place');
const Schema=mongoose.Schema;

const basicsschema = new schema({

    mobility:{
        type:String
    },

    saveTravel:{
        type:String
    },
    messenger:{
        type:String

    },
    ticket:{
        type:String
    }





})
const basics =mongoose.model("basics" , basicsschema);
module.exports=basics;