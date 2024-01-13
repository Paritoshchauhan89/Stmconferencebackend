import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const contactSchema = new mongoose.Schema({
 

    user_name:String,
    user_email:String,
    subject:String,
    message:String,
 
},
  {timestamps:true}
  
  );
autoIncrement.initialize(mongoose.connection);
contactSchema.plugin(autoIncrement.plugin,'contact');


const Contact = mongoose.model('contact',contactSchema)
export default Contact