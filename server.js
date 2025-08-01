import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// app config

const app= express()

const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// api endpoint

app.use('/api/admin',adminRouter);
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)


app.get('/',(req,res)=>{
  res.send("Api worrkingggg")
})

app.listen(port,(err)=>{
    console.log("Server Started",port)
})