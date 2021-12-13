const express= require('express')
const router = express.Router()
const User = require('../model/User');
const Image =require('../model/Image')
router.use(express.json());


//Post
router.post('/CreatePic/:id' , async (req , res )=>{

    const _id = req.params.id;
    const user = await User.findById(req.params.id)
    console.log(user)
    const Newimage = new Image ({
        Image:req.body.Image,
        description:req.body.description
       
    })
    user.images.push(Newimage)
    
    try {
        await user.save()
        res.status(201)
        res.send(user)
    }
    catch(e) {
        console.error(e)
    }
    console.log("Add");
} )



router.get('/image/:id' , async (req , res )=>{
    try{
           const user= await User.findById(req.params.id);
           if (!user){
             res.status(404).send("not found user");
           }
           res.status(201).send(user);
        

    }catch{
        res.status(500).send("not found city ")

    }
})


//delete
router.delete("/delete/:id", async (req,res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user.username === req.body.username) {
        try {
          await user.delete();
          res.status(200).json("city has been deleted...");
          
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your !");
      }
    } catch (err) {
      res.status(500).json(err);
    }
})




module.exports = router;
