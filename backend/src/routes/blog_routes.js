const express=require('express')
const Blog=require('../model/blog_model')
const router=express.Router()
//create a blog post
router.post('/create-post',async(req,res)=>{
    try{
console.log(req.body)
const newPost=new Blog({...req.body})
await newPost.save()
res.status(201).send({
    message:'Post created successfully',
    post:newPost
})
    }catch(error){
        console.error('Error creating a post',error)
        res.status(500).send({message:'Error creating a post'})
    }
})

//get all blogs
router.get('/',async(req,res)=>{
    try{
const {search,category,location}=req.query

let query={}
if(search){
query={
    ...query,
    $or:[
        {title:{$regex:search,$options:"i"}},
        {content:{$regex:search,$options:"i"}},
    ]
}
}

if(category){
    query={
        ...query,
        category
    }
}

if(location){
    query={
        ...query,
        location
    }
}

 const post=await Blog.find(query).sort({createdAt:-1})
 console.log('what is post',post)
res.status(200).send({
    message:'All posts retrived successfully',
    post:post
})
    }catch(error){
        console.error('Error getting posts',error)
        res.status(500).send({message:'Error getting posts'})
    }
 
})
module.exports=router