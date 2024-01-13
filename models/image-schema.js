import mongoose from 'mongoose'


const imageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    } ,
   
},{timestamps:true});

// create model
const image = new mongoose.model("image",imageSchema);
export default image;