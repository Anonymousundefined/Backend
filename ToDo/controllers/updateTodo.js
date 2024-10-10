const Todo=require("../models/Todo");

exports.updateTodo=async(req,res) => {
    try{
          const {id}=req.params;
          const {title,description}=req.body;
          const todos =await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()})
          res.status(200).json({sucess:true,data:todos,message:"Entire data is updated"});
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