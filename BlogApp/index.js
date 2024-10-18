const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT ||4000;
app.use(express.json());

const postRoutes=require("./Routes/post");
app.use("/api/v1",postRoutes);

 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

const dbconnect=require("./config/database");
dbconnect();

app.get("/",(req,res)=>{
    res.write("Conquered level medium 1\n");
})