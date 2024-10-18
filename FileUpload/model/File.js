const mongoose  = require("mongoose");
const nodemailer=require("nodemailer");
const fileSchema=new mongoose.Schema(
    {
      name:{
        type:String,
        required:true,
    
      } ,
      email:{
        type:String,
        required:true,
       
      },
      imageUrl:{
        type:String,
        
      },
      tags:{
        type:String,
       }
    }
);
fileSchema.post("save",async function(doc)
{
    try
    {
    console.log("Docd",doc);
    let transporter=nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{user:process.env.MAIL_USER, pass:process.env.MAIL_PASS,},
    });
    let info=await transporter.sendMail({
        from:"anonymous undefined",
        to:doc.email,
        subject:"New File Uploaded on cloudinary",
        html:`<h2>Hello client</h2> <p>File uploaded view here:<a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`,
    })
    console.log(info)
   
    }
    catch(error) 
    {
        console.log(error);
    }
})  
module.exports=mongoose.model("File",fileSchema);  