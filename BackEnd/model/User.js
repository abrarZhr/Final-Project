const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt =require("bcrypt");
const Image = require('./Image').schema;
const Schema=mongoose.Schema
const Post = require('./PostMessage').schema;




const UserSchema = new Schema({
    UserName :{
        type:String,
        required:[true]

    },
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


    PostMessage :[Post]

})


//fire a function after doc saved ti db 
UserSchema.post('save', function (doc , next){
    console.log('new user was create & saved' ,doc);
    next(); 
    
    })

// fire a function before doc saved to db
// UserSchema.pre('save', async function (next){
//     // console.log('user about to be created $ saved',this );
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password , salt)
//     next();
// })
//static method to login user

UserSchema.statics.login = async function (email, password){
    const user = await this.findOne({email:email})
    
    if (user){
      const auth= await bcrypt.compare(password , user.password)
      if(auth){
          return user;
      }
      throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

const User = mongoose.model('user',UserSchema);
module.exports=User;