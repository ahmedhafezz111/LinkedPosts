import mongoose ,{model,Schema} from "mongoose"



const schema = new Schema({
    text:String,
    body: String,
    createdBy: {
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    post:{
        type:mongoose.Types.ObjectId,
        ref:'Post'

    }
   
    
})

export const Comment = model('Comment',schema)