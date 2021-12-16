const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")


const handlErrors = (err) =>{
    console.log(err.message , err.code)
    let errors = {email :'' , password : ''};

    //incorrect email 
    if (err.message === 'incorrect email'){
        err.email = 'that email is not registered';
    }

     //incorrect password
     if (err.message === 'incorrect password'){
        err.password = 'that password is not registered';
    }

    //duplicate error code 
    if (err.code===11000){
        err.email ='that email is already registered'
        return errors;
    }

    //validation error 
    if (err.message.includes('user validation failed ') ){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;

        });

    }

    return errors;
}

const maxage = 3 * 24 * 60 * 60;
const createToken = (id, email) => {
    return jwt.sign({ id, email }, 'abrar secret', {
        expiresIn: maxage
    });
}


module.exports.singup = async (req , res)=>{
    const {email , password , UserType } = req.body;

    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(password , salt )

    try{
     const newUser = await User.create({
         email,
         password,
         UserType 
     })
     const token = createToken(newUser._id, newUser.email);
    //  const user = await newUser.save() 
     res.status(200).json({user:newUser,token:token})

    }
    catch(err){
        const errors = handlErrors(err)
        res.status(400).send({errors});
    }
}

module.exports.login = async (req, res) => {
    const {email , password}=req.body;

    try {

        // check the email in DB
        const user = await User.login({ email ,password});

        // if 
        // !user && res.status(400).json("Error")

        // Check the password and hash
        // const vPassword = await bcrypt.compare(password, user.password)
        // !vPassword && res.status(400).json("Error")


        const token = createToken(user._id, user.email);
        res.status(200).json({user:user,token:token})
    } catch (err) {
        const errors = handlErrors(err)
        res.status(400).json({ errors });
    }
}
