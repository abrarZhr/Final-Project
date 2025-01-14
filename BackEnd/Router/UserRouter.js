const express= require('express')
const router = express.Router()
const User = require('../model/User');
router.use(express.json());
const bcrypt = require("bcrypt")
const PostMessage = require('../model/PostMessage');


// //UPDATE
// router.put('/:id' , async (req,res) =>{
//     if (req.body.userId === req.params.id)
//     {
//         if (req.body.password){
//             const salt = await bcrypt.genSalt(10)
//             req.body.password = await bcrypt.hash(req.body.password,salt);
//         }
//         try{
//             const upDateUser = await User.findByIdAndUpdate(req.params.id , {
//                 $set:req.body,
//             });
//             res.status(200).json(upDateUser);

//         }catch(err){
//             res.status(500).json(err);
//         }
//     } else {
//         res.status(401).json("you can update only your account!")
//     }

// });

// //DELETE
// router.delete('/:id' , async (req,res) =>{
//     if (req.body.userID === req.params.id){
//         try{
//             const user = await User.findById(req.params.id);
//         try{
//             await User.findByIdAndDelete(req.params.id)
//             res.status(200).json("User has been deleted ... ");
//         }catch(err){
//             res.status(500).json(err); }
//         }catch(err){
//             res.status(404).json("User not found !");
        
//         }
//     }

// });

//Get user 
router.get("/getUser/:id" , async (req , res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password , ...others}=user._doc;
        res.status(200).json(others);

    }catch{

        res.status(500).json({err :"user is not found"});
    }
})



// //Post
// router.post('/CreatePic/:id' , async (req , res )=>{

//     const _id = req.params.id;
//     const user = await User.findById(req.params.id)
//     console.log(user)
//     const Newimage = new Image ({
//         Image:req.body.Image,
//         description:req.body.description
       
//     })
//     user.images.push(Newimage)
    
//     try {
//         await user.save()
//         res.status(201)
//         res.send(user)
//     }
//     catch(e) {
//         console.error(e)
//     }
//     console.log("Add");
// } )



// router.get('/image/:id' , async (req , res )=>{
//     try{
//            const user= await User.findById(req.params.id);
//            if (!user){
//              res.status(404).send("not found user");
//            }
//            res.status(201).send(user);
        

//     }catch{
//         res.status(500).send("not found city ")

//     }
// })


// //delete user 
// router.delete("/delete/:id", async (req,res) => {
//     try {
//       const user = await User.findById(req.params.id);
//       if (user.username === req.body.username) {
//         try {
//           await user.delete();
//           res.status(200).json("city has been deleted...");
          
//         } catch (err) {
//           res.status(500).json(err);
//         }
//       } else {
//         res.status(401).json("You can delete only your !");
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
// })



//UPDATE
router.put("/:id" , async (req , res)=>{
    const user = await User.findById({_id:req.params.id})
  
    if (user && (await user.matchPassword( req.body.password ))){
        try{
                    const updateUser = await User.findByIdAndUpdate (req.params.id , {email:req.body.email},

                        {new: true}
                    );
                    
                    res.status(200).json(updateUser)
        
                }catch(err){
                    res.status(500).json(err);
        
                }

    }
    else 
    {
        res.status(400).json({err:"password dose not match"})
    }

  
    
});

//DELETE
router.delete("/:id" , async (req , res)=>{

    const id=req.params.id
        User.findByIdAndDelete(id)
            .then((data)=>{
                User.find().then(data=>res.json(data)),
                {new: true}
                res.status(200).json(User)

                })

});

//memoris Router

router.get("/getPost/:id" , async (req , res)=>{
    try {

        const _id = req.params.id;
        const user =  await User.findById(req.params.id)

            res.send(user.PostMessage)
        

    } catch (error) {
        res.status(404).json({message:error.message});

    }

})

router.post('/createPost/:id' , async (req , res)=>{
    const _id = req.params.id;
    const post =  await User.findById(req.params.id)

    const newPost = new PostMessage ({
        title : req.body.title,
        message :req.body.message,
        selectedFile :req.body.selectedFile,
        createdAt : req.body.createdAt
    })

 

    post.PostMessage.push(newPost)

    try{
     await post.save(); 
     res.status(201)
     res.send(post)

    } catch(error){
        res.status(404).json({message:error.message});

    }
})

router.put("/updatePost/:idPost", async(req , res )=>{
 User.update({"PostMessage._id":req.params.idPost},

    {
     $set:{
         "PostMessage.$.title":req.body.title,
         "PostMessage.$.message":req.body.message,
         "PostMessage.$.selectedFile":req.body.selectedFile
     },
    },

    function(err){
        if(err){
          console.log(err)
          return res.send(err)
  
        }
      }
 )
 res.status(201).send("successfully")
   
}) 


router.delete("/deletePost/:id/:idPost" , async(req ,res )=>{

    const idPost = req.params.idPost;

    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).send("User is not found");
        }

        await user.PostMessage.pull({_id:idPost});
        await user.save();
        res.status(201).send(user);

    } catch (error){
        res.status(500).send()
    }

})






module.exports = router;
