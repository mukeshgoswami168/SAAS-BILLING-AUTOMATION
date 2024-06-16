
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  
  totalDuration:
  { 
    type:String,
    default:0,

  },
  totalTransactions: {
    type:Number,
    default:0,

  },
  logins:{ 
    type:Number,
    default:0,

  },
  deviceInfo:{ 
    type:String,
    default:0,

  },
  location: {
    type:String,
    default:0,

  },
//   featuresUsed: [{
    
//     type:String

//   }]

//   ,
  
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
