const bcrypt=require("bcrypt");
const User=require("../models/User");
const jwt=require("jsonwebtoken"); 
require("dotenv").config()

exports.signup=async(req,res) => {
    try {
       
        const {name,email,password,role}=req.body;
        const existingUser =await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({success:false,message:"Email already exists", });
        }
        let hashedPassword;
        try
        {
            hashedPassword=await bcrypt.hash(password,10);
        }
        catch(err)
        {
            return res.status(500).json({success:false,message:"Error hashing password",});
        }
        const user=await User.create({name,email,password:hashedPassword,role })
        return res.status(200).json({success:true,message:"user created successfully", });
    }
    catch(error)
    {
        console.error(error);
        return res.status(500).json({success:false,message:"user not registered sucessfully"});

    }    
}

exports.login= async(req,res) => {
    try
    {
      const {email,password}=req.body;
      if(!email || !password)
      {
        return res.status(400).json({ success:false, message:"Plese provide data properly",});
      }
      const user =await User.findOne({email});
      console.log(user.email);
      if(!user)
      {
        res.status(401).json({success:false, message:"User is not registered",});
      }
      const payload={
        name:user.name,
        email:user.email,
        role:user.role,
      };
      console.log(payload.email);
      if(await bcrypt.compare(password,user.password))
      {
        let token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h",}); 
        console.log(user);
    
        user.token=token;
        user.password=undefined;
        console.log(user);
        const options={
        expires:new Date(Date.now()+3*24*60*60*1000)
       }
       res.cookie("anmolcookie",token,options).status(200).json({success:true,token,user,message:"user logged in successfully"}); 
      }
      else
      {
        return res.status(403).json({success:false,message:"Incorrrect Password"});
      }
    }
    catch(error)
    {
     console.log(error);
     res.status(500).json({
     success:false,
     message:"Login Failure",
    });
    }

}