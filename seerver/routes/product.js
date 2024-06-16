const express = require("express")
const router = express.Router()

const{
    getAllUserProductDetails
}=require("../controllers/product");


router.get("/userProduct/:id",getAllUserProductDetails);



module.exports=router;
