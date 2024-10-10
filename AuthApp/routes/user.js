const express= require("express");
const router=express.Router();

const{signup,login}=require("../controllers/Auth");
const{auth,isAdmin,isStudent}=require("../middlewares/auth");


router.post("/signup",signup);
router.post("/login",login);


router.get("/test",auth,(req,res)=>{res.json({success:true,message:"ITs just authentic test route ", });});
router.get("/student",auth,isStudent,(req,res)=>{res.json({success:true,message:"Welcome to student route", });});
router.get("/admin",auth,isAdmin,(req,res)=>{res.json({success:true,message:"Welcome to Admin route", });});


module.exports=router;   