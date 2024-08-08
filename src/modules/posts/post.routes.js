import { Router } from "express";
import { addPost, deletePost, getAllPosts} from "./post.controller.js";


const postRouter = Router()

postRouter.route('/').post(addPost).get(getAllPosts)
postRouter.route('/:id').delete(deletePost)

  

export default postRouter