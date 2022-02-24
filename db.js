const mongoose=require("mongoose");
// const uri=process.env.URL;
mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Database connected");
}).catch(error=>console.log(error));