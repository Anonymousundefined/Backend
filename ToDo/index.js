const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT ||4000;
app.use(express.json());

const todoRoutes=require("./routes/todos");
app.use("/api/v1",todoRoutes);

 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

const dbconnect=require("./config/database");
dbconnect();

app.get("/",(req,res)=>{
    res.write("Conquered level 1\n");
    res.write("http://localhost/api/v1/createTodo\n");
    res.write("http://localhost:3000/api/v1/getTodo\n");
    res.write("http://localhost:3000/api/v1/getTodoById/66f6ea9fb2e9bbab2935963d\n");
    res.write("http://localhost:3000/api/v1/updateTodo/66f6ea9fb2e9bbab2935963d\n");
    res.write("http://localhost:3000/api/v1/deleteTodo/66f6ea9fb2e9bbab2935963d\n");

    res.end();
})