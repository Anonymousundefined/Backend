const Comments=require("../model/Comments");
const Post = require("../model/Post");

exports.createComment=async(req,res) => {
    try{
        const {commented_by,comment,post}=req.body;
        const response=await Comments.create({commented_by,comment,post});
        await Post.findByIdAndUpdate(post, {$push: {comments: response._id}}, {new: true});
        const updatedPost = await Post.findById(post);
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

exports.createUncomment=async(req,res) => {
    try{
        const {comment,post}=req.body;
        const response=await Comments.findOneAndDelete({comment,post});
        await Post.findByIdAndUpdate(post, {$pull: {comments:comment}}, {new: true});
        const updatedPost = await Post.findById(post);
        res.status(200).json(
            {
                success:true,
                post:updatedPost,
                message:"uncomment",
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
