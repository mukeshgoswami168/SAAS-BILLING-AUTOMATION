const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email:{
    type:String,
  },

  data:{
    type: mongoose.Schema.Types.ObjectId,
    //required:true,
    ref:"Data"
  },
  product:[{
    type: mongoose.Schema.Types.ObjectId,
   // required:true,
    ref:"Product"
  }]

//   totalDuration:
//   { 
//     type:String,
//     default:0,

//   },
//   totalTransactions: {
//     type:Number,
//     default:0,

//   },
//   logins:{ 
//     type:Number,
//     default:0,

//   },
//   deviceInfo:{ 
//     type:String,
//     default:0,

//   },
//   location: {
//     type:String,
//     default:0,

//   },
// //   featuresUsed: [{
    
// //     type:String

// //   }]

// //   ,
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
