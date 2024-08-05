const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const port=process.env.PORT||5000

//parse options
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}))

//routes
const blogRoutes=require('./src/routes/blog_routes')
const commentRoutes=require('./src/routes/comment_routes')
const userRoutes=require('./src/routes/auth_user_route')
app.use("/api/auth",userRoutes)
app.use("/api/blogs",blogRoutes)
app.use("/api/comments",commentRoutes)

async function main(){
    await mongoose.connect(process.env.MONGODB_URL)
    app.get('/',(req,res)=>{
        res.send('FullStack Blog')
    })
}
main().then(()=>console.log('mongodb connected successfully')).catch(err=>console.log(err))


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})