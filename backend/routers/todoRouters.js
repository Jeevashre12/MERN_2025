const express=require('express')
const todoRoute=express.Router()
todoRoute.get('/',(req,res)=>{
    res.send("todo Get is working")
})
module.exports=todoRoute