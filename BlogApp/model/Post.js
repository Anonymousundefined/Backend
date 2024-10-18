const mongoose  = require("mongoose");

const postSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        email:{
            type:String,
            required:true,
        },
        createdAt:{
            type:Date,
            
            default:Date.now(),
        },
        createdBy:{
            type:String,
            required:true,
            maxLength:50,
        },
        likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Likes",
        }],
        comments:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comments",
        }]

        
    }
);
module.exports=mongoose.model("Post",postSchema);