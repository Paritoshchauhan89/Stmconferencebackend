import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const organizerSchema = new mongoose.Schema({
    organizerfullname:{
        type:String,
        require:false
    },
    organizeremail: {
        type:String,
        require:false
    },
    organizerphonenumber: {
        type:String,
        require:false
    },
    designation:{
        type:String,
        require:false
    },
    department:{
        type:String,
        require:false
    },
    affilation:{
        type:String,
        require:false
    },
    organizerimage: {
        data:Buffer,
        contentType:String,
        require:false
    },
    organizerkeypoints:{
        type:String,
        require:false
    },
    organizeraddress:{
        type:String,
        require:false
    },
    organizercountry: {
        type:String,
        require:false
    },
    organizerstate: {
        type:String,
        require:false
    },
    organizercity:  {
        type:String,
        require:false
    },
    organizerpincode:  {
        type:String,
        require:false
    },
    bio: {
        type:String,
        require:false
    },
    profileurl:  {
        type:String,
        require:false
    },
    organizerabout: {
        type:String,
        require:false
    },
    category: {
        type: mongoose.ObjectId,
        ref: "Category",
        required: true
      },

},
{timestamps:true},)
autoIncrement.initialize(mongoose.connection);
organizerSchema.plugin(autoIncrement.plugin,'organizer');


const organizer=mongoose.model('Organizer',organizerSchema)
export default organizer