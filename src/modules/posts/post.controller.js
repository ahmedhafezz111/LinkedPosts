import { Post } from "../../../database/models/post.model.js"


const addPost = async (req,res)=>{
    let post = await  Post.insertMany(req.body)
    res.json({message:'success',post})
  }

  const getAllPosts = async (req,res)=>{
    let post = await  Post.find().populate('createdBy' , 'name -_id')
    res.json({message:'success',post})
  }

  const deletePost = async (req,res)=>{
    let post = await  Post.findByIdAndDelete(req.params.id)
    res.json({message:'success',post})
}
  
  export {
    addPost,
    getAllPosts,
    deletePost
  }

  
  // const updatePost = async (req,res)=>{
  //   let post = await  Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
  //   res.json({message:'success',post})
  // }