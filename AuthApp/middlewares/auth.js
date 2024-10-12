const jwt=require("jsonwebtoken");
require("dotenv").config();

exports.auth=(req,res,next)=>
{
   try
     {
      const token =req.body.token;
    if(!token)
    {
      return res.status(401).json({success:false,message:"Token Missing"});
    }
    try
    {
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode);
        req.user=decode;
    }
    catch(error)
    {
        res.status(401).json({status:false,message:"Token is invalid"}); 
    }
    next();
    }
    catch(error)
    {
     res.status(401),json({success:false,message:"something went wrong while verifying token"}); 
    }
}
 
exports.isStudent=(req,res,next)=>
{
    try
    { 
      console.log(req.user.role);
      if(req.user.role!="Student")
      {
        return res.status(401).json({success:false,message:"You are not a student",}); 
      }
     next();
    }
    catch(error)
    {
       return res.status(500).json({success:false,message:"User Role is not matching"});
    }
}

exports.isAdmin=(req,res,next)=>
    {
        try
        {
          if(req.user.role!="Admin")
          {
            return res.status(401).json({success:false,message:"You are not a student",}); 
          }
         next();
        }
        catch(error)
        { 
           return res.status(500).json({success:false,message:"User Role is not matching"});
        }
    }