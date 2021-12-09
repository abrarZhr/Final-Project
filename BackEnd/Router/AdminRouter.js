const express= require('express')
const router = express.Router()
router.use(express.json());
const City = require('../model/City');
const User = require('../model/User');
const please =require('../model/Place');


//POST
router.post('/CreateCity' , async (req , res )=>{

    const NewCity = new City ({
        name:req.body.name,
        BigImage:req.body.BigImage,
        centerImage:req.body.centerImage,
        museumsImage:req.body.museumsImage,
        trendImage:req.body.trendImage,
    })
    
    try {
        await NewCity.save()
        res.status(201)
        res.send(NewCity)
    }
    catch(e) {
        console.error(e)
    }
    console.log("Add");
} )

//router for pleace 
router.post('/CreatePleace/:id' , async (req , res )=>{
    const _id = req.params.id;
    const city = await City.findById(req.params.id)
    const NewPleace = new please ({
        type:req.body.type,
        image:req.body.image,
        description:req.body.description,
        location:req.body.location,
        
    });
    city.places.push(NewPleace)

    try {
        await city.save()
        res.status(201)
        res.send(city)
    }
    catch(e) {
        console.error(e)
    }
    console.log("Add");
} )



//get 
router.get('/getCity' , async (req , res )=>{
    try{
            City.find({}).then((city)=>{
                res.send(city)
        })

    }catch{
        res.status(500).send()

    }
})

//get 
router.get('/city/:id' , async (req , res )=>{
    try{
           const city= await City.findById(req.params.id);
           if (!city){
             res.status(404).send("not found city");
           }
           res.status(201).send(city);
        

    }catch{
        res.status(500).send("not found city ")

    }
})

//Update
router.put("/:id", async (req,res) => {
    try {
      const pleac = await please.findById(req.params.id);
      if (pleac.type === req.body.type) {
        try {
          const updatedCity = await please.findByIdAndUpdate(req.params.id, {
              $set: req.body,
            },
            { new: true }
          );
        
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your !");
      }
    } catch (err) {
      res.status(500).json(err);
    }
})


//delete
router.delete("/deleteCity/:id", async (req,res) => {
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