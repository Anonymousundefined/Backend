const express =require('express');
const app=express();

const bodyParser=require("body-parser");
app.use(bodyParser.json());

app.listen(3820,()=>{
    console.log('server is running on port 3820');
});

app.get('/',(req,res)=>{
    res.send("welcome to backend ..conquer it");
})


app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;  // Removed the parentheses
    console.log(name);
    console.log(brand);
    response.send("car submitted successfully");
});

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydatabase",{  
})
.then(()=>{console.log("connection successful")})
.catch((err)=>{console.log("recieved an error")})