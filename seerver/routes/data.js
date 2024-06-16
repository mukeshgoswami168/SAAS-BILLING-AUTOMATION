const express = require("express")
const router = express.Router()


const{
    getAllUserDataDetails
}=require("../controllers/data");


router.get("/userData/:id",getAllUserDataDetails);



module.exports=router;