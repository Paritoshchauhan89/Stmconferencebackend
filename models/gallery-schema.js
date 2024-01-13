import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const gallerySchema = new mongoose.Schema({
    
    gallerytitle:String,
    galleryimage:String,
    gelleryratings:String,
 
},
  {timestamps:true}
  
  );
autoIncrement.initialize(mongoose.connection);
gallerySchema.plugin(autoIncrement.plugin,'gallery');


const gallery = mongoose.model('gallery',gallerySchema)
export default gallery