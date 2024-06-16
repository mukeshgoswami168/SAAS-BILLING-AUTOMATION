const express = require("express");
const router = express.Router();
const User = require("../models/Usermodel");
const Data=require("../models/Datamodel");
const Product=require("../models/Productmodel")


exports.createUser=async(req,res)=>{
    
  try{
    const { email }=req.body;
    
    const userExist=await User.findOne({email});
    


    if(!userExist){

      const data=await Data.create(
        {
          totalDuration: 0,
          totalTransactions: 0,
          logins: 0,
          deviceInfo: null,
          location: null,
        }
      )
      // const product=await Product.create({
      //    features:"Honney",
      //    price:20,
      //    discountedPrice:15,
      //    durationUsed:8,
      //    total:10,
      // })
      const user=await User.create({
            email,
            data:data._id,
            //product:product._id,

      })
      res.status(200).json({
        success: true,
         user,
        message: "User created  Successfully",
      })
    }

    else{
      const user = await User.findOne({ email }).populate('data').populate('product');
      res.status(200).json({
        success: true,
         user,
        message: "User fetched successfully",
      });
    }

  }
  catch(error){
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to create User",
      error: error.message,
    })
  }
}




// exports.getUserData=async(req,res)=>{

//     // const email = req.params.email;

//     try {

//         const email = req.params.email;
//       // Find data based on the provided email
//       const userData = await Data.findOne({ email: email });
  
//       if (!userData) {
//         return res
//           .status(404)
//           .json({ message: "Data not found for the provided email." });
//       }
  
//       res.status(200).json(userData);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
 
  