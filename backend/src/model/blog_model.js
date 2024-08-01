const mongoose=require('mongoose')

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,

    },
    content:{
        type:String
    },
    coverImg:{
        type:String
    },
    category:{
        type:String
    },
    author:{
        type:String
    },
    rating:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Blog=mongoose.model("Blog",BlogSchema)

module.exports=Blog