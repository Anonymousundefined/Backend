const express= require("express");
const router=express.Router();

const{createPost,getPost}=require("../controllers/Post");
const{createComment,createUncomment}=require("../controllers/Comments");
const{createLike,createUnlike}=require("../controllers/Likes");

router.post("/posts/create",createPost);
router.get("/posts",getPost);
router.post("/comments/create",createComment);
router.post("/comments/uncreate",createUncomment);
router.post("/likes/create",createLike);
router.post("/likes/unlike",createUnlike);





module.exports=router;  