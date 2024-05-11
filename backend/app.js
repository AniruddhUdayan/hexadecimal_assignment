const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",async (req,res)=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await data.json();
    res.send(response);
})

app.get("/posts", async ( req , res )=> {
    const userId = req.headers.userid;
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const response = await data.json();
    console.log(userId);
    // if(userId == response.userId){ 
    //     res.send(response);
    // }else{
    //     console.error("userId not matching");
    // }
    const result = response.filter((user)=>{
        if(user.userId == userId){
            return user;
        }else{
            console.error("Id not matching");
        }
    })
    res.send(result)
    
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})