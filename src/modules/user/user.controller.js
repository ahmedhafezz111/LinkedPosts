import { User } from "../../../database/models/user.model.js"


const addUser = async (req,res)=>{
    let user = await  User.insertMany(req.body)
    res.json({message:'success',user})
  }

  const getAllUsers = async (req,res)=>{
    let user = await  User.find()
    res.json({message:'success',user})
  }

  const updateUser = async (req,res)=>{
    let user = await  User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message:'success',user})
  }
  const deleteUser = async (req,res)=>{
    let user = await  User.findByIdAndDelete(req.params.id)
    res.json({message:'success',user})
}
  
  export {
    addUser,
    getAllUsers,
    updateUser,
    deleteUser
  }