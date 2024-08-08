import { Router } from "express";
import { addUser, deleteUser, getAllUsers, updateUser } from "./user.controller.js";


const userRouter = Router()

userRouter.route('/',).post(addUser).get(getAllUsers)
userRouter.route('/:id').put(updateUser).delete(deleteUser)

  

export default userRouter