import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
email:String,
code:String,
expireIn:Number
},{timestamps:true});

export default mongoose.model('otp', otpSchema)