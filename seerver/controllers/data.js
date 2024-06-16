const express = require("express");
const router = express.Router();
const User = require("../models/Usermodel");
const Data=require("../models/Datamodel");
const Product=require("../models/Productmodel")

exports.getAllUserDataDetails = async (req, res) => {
    try {
      const {id} = req.params;
      const userDetails = await User.findById(id)
        .populate("data")
        .exec()
      console.log(userDetails)
      res.status(200).json({
        success: true,
        message: "User Data fetched successfully",
        data: userDetails,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }
  