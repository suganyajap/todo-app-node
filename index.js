const task=require('./routes/task');
const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
require('./db');

app.use(express.json());
app.use(cors());
app.use("/task",task);
const PORT=process.env.PORT;

app.get("/",async (req,res)=>{
    res.send("Todo-App");
})
app.listen(PORT,()=>console.log("App is started in ",PORT));