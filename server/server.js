const express=require("express")

const app=express()

const port=5173

app.get("/createAccount",(req,res)=>{
  res.status(200);
  
})
app.listen(port,(err)=>{
  console.log("server running successfully");
})