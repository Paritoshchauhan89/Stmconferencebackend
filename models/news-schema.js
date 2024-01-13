import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const newsSchema = mongoose.Schema({
    
    title:String,
    image:String,
    description1:String,
    description2:String,
    keypoints:String,
},{timestamps:true}
);

autoIncrement.initialize(mongoose.connection);
newsSchema.plugin(autoIncrement.plugin, 'news');


const news = mongoose.model('news', newsSchema);

export default news;