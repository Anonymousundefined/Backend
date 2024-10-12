require("dotenv").config()
exports.math=(req,res)=>{
    try{
    const {num1,num2}=req.body;
    if(num1==0 || num2==0)
    {
        return res.status(400).json({succcess:false,message:"invalid input"});
    }
    const a=num1+num2;
    return res.status(200).json({success:true,message:"Task completed",result:a,});

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