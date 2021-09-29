const express = require('express');
const router = express.Router();
const User = require("../model/User")
const { check, validationResult } = require('express-validator');
const https = require("https");
const Axios = require("axios");


//add  new user
router.post('/add', 
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('id',    "").isLength({ min: 9, max : 9 }),
  check('phone',    "").notEmpty()
  ,async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

        const newUser = new User ({
            name:  req.body.name,
            id: req.body.id,
            ipAdress: req.body.ipAdress,
            phone : req.body.phone,
            });
          try{
            const saveUser = await  newUser.save();
            res.json(saveUser);
          } 
          catch (err)  {
      console.error("error = ",err.message);
      res.status(500).send('Server Error2');
    }
  });

//read all users
router.get('/', async (req, res) => {
    try {
      User.find({}, (err,result)=>{
        if(err){
          res.send(err)
        }
        res.send(result)
      })
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error1');
    }
  });



//delete user by id 
router.delete('/delete/:id', async (req, res) => {
    try {
      console.log("delete ",req.params.id )
      const user =req.params.id;
       await User.findByIdAndRemove(user);

      if (!user) {
        return res.status(404).json({ msg: 'user not found' });
      }
      res.json({ msg: 'user removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

//fetch Ip Api
  async function findLocation(ip){
    try{
 let response = await Axios.get(`http://ip-api.com/json/${ip}`)
 let data = await response.data;
 const city  = data.city
 const country  = data.country
 
 return({city,country})
    }
 
   catch{
     (err => console.log(err));
   }
  }

//find location by IP Adress 
router.post('/find/', async (req, res) => {
  const id =req.params.id;
    const ip =req.params.ip;
    const{ city, country} = await findLocation(ip);
console.log("city = ",city)

  try {
    const id1 =req.body.id;

    // Using upsert option (creates new doc if no match is found):
    let user = await User.findOneAndUpdate(
      { _id: id },
      { city: city ,country: country},
      { new: true, upsert: true, setDefaultsOnInsert: true }
      
    );
    return res.json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }


});


module.exports =router;