import { Router } from "express";
import { addComment, deleteComment, getAllComments} from "./comment.controller.js";


const commentRouter = Router()

commentRouter.route('/').post(addComment).get(getAllComments)
commentRouter.route('/:id').delete(deleteComment)

  

export default commentRouter