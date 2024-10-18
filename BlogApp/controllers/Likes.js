const Likes=require("../model/Likes");
const Post = require("../model/Post");

exports.createLike=async(req,res) => {
    try{
        const {liked_by,post}=req.body;
        const response=await Likes.create({liked_by,post});
        updatedPost=await Post.findByIdAndUpdate(post, {$push: {likes: response._id}},
                                                 {new: true}).populate("likes");
       
        res.status(200).json(
            {
                success:true,
                post:updatedPost,
                message:"Comment inserted",
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.createUnlike=async(req,res) => { 
    try{
        const {like,post}=req.body;
        const response=await Likes.findOneAndDelete({like,post});
        updatedPost=await Post.findByIdAndUpdate(post, {$pull: {likes: like}},
                                                 {new: true}).populate("likes");
       
        res.status(200).json(
            {
                success:true,
                post:updatedPost,
                message:"Comment inserted",
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}