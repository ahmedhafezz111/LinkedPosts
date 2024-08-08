import { Comment } from "../../../database/models/comment.model.js"


const addComment = async (req,res)=>{
    let comment = await  Comment.insertMany(req.body)
    res.json({message:'success',comment})
  }

  const getAllComments = async (req,res)=>{
    let comment = await  Comment.find({},{__v:0}).populate('createdBy' , 'name -_id').populate('post','title -_id').select('-_id')
    res.json({message:'success',comment})
  }

  const deleteComment = async (req,res)=>{
    let comment = await  Comment.findByIdAndDelete(req.params.id)
    res.json({message:'success',comment})
}
  
  export {
    addComment,
    getAllComments,
    deleteComment
  }

  
  // const updatePost = async (req,res)=>{
  //   let post = await  Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
  //   res.json({message:'success',post})
  // }