const User = require("../models/userModel");
require('dotenv').config();
const jwt=require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const authMiddleware=asyncHandler(async(req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        try {
            token=req.headers.authorization.split(" ")[1];
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            const user=await User.findById(decoded.id);
            req.user=user;
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized,token failed");
        }
    }else{
        res.status(401);
        throw new Error("Not authorized,no token");
    }
});
const isAdmin=asyncHandler(async(req,res,next)=>{
   const {email}=req.user;
   const adminUser=await User.findOne({email});
   if(adminUser.role!=="admin"){
      throw new Error("You are not an admin")
   }else{
    next();
   }
}); 
module.exports={authMiddleware,isAdmin}
