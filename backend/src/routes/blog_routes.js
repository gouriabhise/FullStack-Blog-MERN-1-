const express=require('express')
const Blog=require('../model/blog_model')
const Comment=require('../model/comment_model')
const router=express.Router()
const verifyToken=require('../middleware/verifyToken')
const isAdmin = require('../middleware/isAdmin')

//create a blog post
router.post('/create-post',verifyToken,isAdmin,async(req,res)=>{
    try{
console.log(req.body)
const newPost=new Blog({...req.body,author:req.userId})
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

 const post=await Blog.find(query).populate('author','email').sort({createdAt:-1})
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

//get single blog
router.get('/:id',async(req,res)=>{
    try{
console.log(req.params.id)
const postId=req.params.id
const post=await Blog.findById(postId)
if(!post){
    return res.status(404).send({message:'Post not found!'})
}

//comments
const comment=await Comment.find({postId:postId}).populate('user',"username email")
res.status(200).send({
    message:'Post retrived successfully!',
    post:post
})
    }catch(error){
        console.error('Error getting a post',error)
        res.status(500).send({message:'Error getting a post'})
    }
})

//update blog 

router.patch("/update-post/:id",verifyToken,async(req,res)=>{
    try{
const postId=req.params.id
const updatePost=await Blog.findByIdAndUpdate(postId,{
    ...req.body
},{new:true})

if(!updatePost){
    return res.status(404).send({message:'Post not found!'})

}
res.status(200).send({
    message:'Post updated successfully!',
    post:updatePost
})
    }catch(error){
        console.error('Error updating a post',error)
        res.status(500).send({message:'Error updating a post'})
    }
})

router.delete("/:id",verifyToken,async(req,res)=>{
    try{
const postId=req.params.id;
const post=await Blog.findByIdAndDelete(postId)
if(!post){
    return res.status(404).send({message:'Post not found!'})

}

//delete related comments
await Comment.deleteMany({postId:postId})
res.status(200).send({
    message:'Post deleted successfully!',
    post:post
})
    }catch(error){
        console.error('Error deleting a post',error)
        res.status(500).send({message:'Error deleting a post'})
    }
})

//related blgos
router.get("/related/:id",async(req,res)=>{
    try{
const {id}=req.params
if(!id){
    return res.status(404).send({message:'Post id is required'})
}
const blog=await Blog.findById(id)
if(!blog){
    return res.status(404).send({message:'Post is not found'})
}

const titleRegex=new RegExp(blog.title.split(' ').join('|'),'i')
const relatedQuery={
    _id:{$ne:id},
    title:{$regex:titleRegex}
}
const relatedPost=await Blog.find(relatedQuery)
res.status(200).send({message:'Related post found!',post:relatedPost})
    }catch(error){
        console.error('Error fetching related post',error)
        res.status(500).send({message:'Error fetching related  post'})
    }
})
module.exports=router