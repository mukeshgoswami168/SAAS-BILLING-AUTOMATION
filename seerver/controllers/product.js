const express = require("express");
const router = express.Router();
const User = require("../models/Usermodel");
const Data=require("../models/Datamodel");
const Product=require("../models/Productmodel")

// exports.getAllUserProductDetails = async (req, res) => {
//     try {
//      const {id}=req.params;
//     //   if (!id) {
//     //     return res.status(400).json({
//     //       success: false,
//     //       message: "User ID is required",
//     //     });
//     //   }

//      console.log({id});
//       const userDetails = await User.findById(id)
//         .populate("product")
//         .exec()
//       console.log(userDetails)
//       res.status(200).json({
//         success: true,
//         message: "User Product fetched successfully",
//         data: userDetails,
//       })
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: error.message,
//       })
//     }
//   }
  


  exports.createProduct = async (req, res) => {
    try {
      // Get user ID from request object
      const {id}=req.params;
  
      // Get all required fields from request body
      let {
        features,
        price ,
        discountedPrice,
        durationUsed,
        total

      } = req.body
      // Get thumbnail image from request files
      
  
      // Check if any of the required fields are missing
      if (
        !features ||
        !price ||
        !discountedPrice||
        !durationUsed||
        !total
      ) {
        return res.status(400).json({
          success: false,
          message: "All Fields are Mandatory",
        })
      }
      

      const newProduct = await Product.create({
        features,
        price,
        durationUsed,
        discountedPrice,
        total
      })
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $push: { products: newProduct._id } },
        { new: true }
      );
  
      // Check if user was found and updated
      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
  
      // Return success response with new product data
      res.status(200).json({
        success: true,
        data: newProduct,
        message: "Product created and added to user successfully",
      });
    } catch (error) {
      // Handle any errors that occur during the creation of the course
      console.error(error)
      res.status(500).json({
        success: false,
        message: "Failed to create course",
        error: error.message,
      })
    }
  }


  exports.getAllUserProductDetails = async (req, res) =>  {
  try {
    
    const {userId}=req.params;
    const user = await User.findById(userId).exec();
    if (!user) {
      console.log("User not found");
      return;
    }

    const productDetails = [];
    for (const productId of user.product) {
      const product = await Product.findById(productId).exec();
      if (product) {
        productDetails.push(product);
      } else {
        console.log(`Product with ID ${productId} not found`);
      }
    }

    console.log("User:", user);
    console.log("Product Details:", productDetails);
  } catch (error) {
    console.error("Error fetching user with product details:", error);
  } 
}