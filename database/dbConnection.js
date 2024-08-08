import mongoose from "mongoose";



export const dbConnection = mongoose.connect('mongodb://localhost:27017/newMongoose').then(()=>{
    console.log("db connection successfully");
})
