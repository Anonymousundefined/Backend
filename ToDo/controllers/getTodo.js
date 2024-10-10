const Todo=require("../models/Todo");

exports.getTodo=async(req,res) => {
    try{
          const todos =await Todo.find({});
          res.status(200).json({sucess:true,data:todos,message:"Entire data is fetched"});
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


exports.getTodoById=async(req,res) => {
    try{
          const id=req.params.id;
          const todo=await Todo.findById( {_id:id} );
          if(!todo)
          {
          return  res.status(404).json({sucess:false,message:"No data found by given id"});
          }
          res.status(200).json({sucess:true,data:todo,message:"data from ${id} found successfully"});
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
