const mongoose  = require("mongoose");

const commentSchema=new mongoose.Schema(
    {
        commented_by:{
            type:String,
            required:true,
            
        },
        post:{
            type:String,
            required:true,  
        },
        comment:
        {
            type:String,
            required:true,
        },
        
    }
);
module.exports=mongoose.model("Comments",commentSchema);