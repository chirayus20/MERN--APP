const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const router = express.Router();

// Post API
router.post("/", async (req, resp) => {
  // var name =  req.body.name   <-----write this type also
  const { name, email, age } = req.body;
  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });

    resp.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    resp.send(400).json({ error: error.message });
  }
});


// Get API
router.get("/", async (req, resp) => {
  try {
    const showAll = await User.find();
    resp.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    resp.send(500).json({ error: error.message });
  }
});



// Get Single User
router.get("/:id", async (req, resp) => {
    const {id} =req.params;
    try {
      const singleUser = await User.findById({_id : id});
      resp.status(200).json(singleUser);
    } catch (error) {
      console.log(error);
      resp.send(500).json({ error: error.message });
    }
  });

  
//   Delete Api
router.delete("/:id", async (req, resp) => {
  const {id} = req.params; 
    try {
        const singleUser = await User.findByIdAndDelete({_id : id});
        resp.status(200).json(singleUser);
      } catch (error) {
        console.log(error);
        resp.send(500).json({ error: error.message });
      }
    });


// Put/Patch 
router.patch("/:id", async (req, resp) => {
  const {id} = req.params; 
  const {name, email, age} = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body,{
        new: true,
        });
        resp.status(200).json(updateUser);
      } catch (error) {
        console.log(error);
        resp.send(500).json({ error: error.message });
      }
    });
  
  
module.exports = router;