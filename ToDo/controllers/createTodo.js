const Todo=require("../models/Todo");

exports.createTodo=async(req,res) => {
    try{
        const {title,description}=req.body;
        const response=await Todo.create({title,description});
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