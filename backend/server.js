const express=require('express')
const dotenv=require('dotenv')
dotenv.config();
const app=express();
const cors=require('cors')

const PORT=process.env.PORT;

const connectDB=require('./config/db');
const router = require('./routers/egRouters');
const todoRoute = require('./routers/todoRouters');
connectDB();
// app.get('/get',(req,res)=>{
//     res.send('Get route is working')
// })
// app.post('/post',(req,res)=>{
//     res.send('Post route is running')
// })
// app.put('/put',(req,res)=>{
//     res.send('Put route is running')
// })
// app.delete('/delete',(req,res)=>{
//     res.send('Delete route is running')
 //})
 app.use(express.json())
 app.use(router)
 app.use(cors())
 app.use('/api/todo',todoRoute)
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})