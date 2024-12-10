import express from 'express'
import ayushRouters from './routers/ayushRouters.js'


const app=express()


const port=process.env.PORT || 3001
 
app.use('/ayush',ayushRouters)

app.listen(port,()=>{
    console.log(`Server started successfully with port number ${port}`);
})
