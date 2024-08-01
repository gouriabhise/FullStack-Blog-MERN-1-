const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const port=process.env.PORT||5000

//parse options
app.use(express.json())
app.use(cors())
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