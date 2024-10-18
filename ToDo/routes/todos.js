const express= require("express");
const router=express.Router();

const{createTodo}=require("../controllers/CreateTodo");
const{getTodo,getTodoById}=require("../controllers/getTodo");
const{updateTodo}=require("../controllers/updateTodo");
const{deleteTodo}=require("../controllers/deleteTodo");



router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodoById/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;  