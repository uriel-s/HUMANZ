const express = require('express');
const router = express.Router();
const User = require("../model/User")


//add  new user
router.post('/add', async (req, res) => {

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

module.exports =router;