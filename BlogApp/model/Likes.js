const mongoose  = require("mongoose");

const likeSchema=new mongoose.Schema(
    {
        liked_by:{
            type:String,
            required:true,
            
        },
        post:{
            type:String,
            required:true,  
        },
        
    }
);
module.exports=mongoose.model("Likes",likeSchema);