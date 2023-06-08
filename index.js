const express=require('express')
const { connection } = require('./db')
const { userRouter } = require('./routes/user.routes')
const { noteRoutes } = require('./routes/note.routes')
require("dotenv").config()
const cors =require('cors')

const app=express()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/notes",noteRoutes)

app.listen(process.env.port,async()=>{
   try {
    await connection
    console.log(`server is runnig at port ${process.env.port}`)
    console.log("connected to the db")
   } catch (error) {
    console.log(error)
    console.log("something went wrong")
   }
})