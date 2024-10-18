const Post=require("../model/Post");

exports.createPost=async(req,res) => {
    try{
        const {title,description,email,createdAt,createdBy}=req.body;
        const response=await Post.create({title,description,email,createdAt,createdBy});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully Data inserted"
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

exports.getPost=async(req,res) => {
    try{
          const post =await Post.find({},'title description');
          console.log(post.title);
          res.status(200).json({sucess:true,data:post,message:"Entire data is fetched",task:"completed"});
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