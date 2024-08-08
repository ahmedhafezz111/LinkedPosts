import express from 'express'
import userRouter from './src/modules/user/user.routes.js'
import postRouter from './src/modules/posts/post.routes.js'
import { dbConnection } from './database/dbConnection.js'
import commentRouter from './src/modules/comment/comment.routes.js'
import {v4 as uuidv4} from 'uuid'
import multer from 'multer'


const app = express()
const port = 3000

app.use(express.json())


app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/comments',commentRouter)






app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



