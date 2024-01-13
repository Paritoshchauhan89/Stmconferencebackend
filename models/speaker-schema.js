import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const speakerSchema = new mongoose.Schema({
    speakerfullname: String,
    speakeremail: String,
    speakerphonenumber: String,
    designation:String,
    department:String,
    affilation:String,
    speakerimage: String,
    speakerkeypoints:String,
    speakeraddress: String,
    speakercountry: String,
    speakerstate: String,
    speakercity: String,
    speakerpincode: String,
    bio:String,
    profileurl: String,
},
{timestamps:true}
)
autoIncrement.initialize(mongoose.connection);
speakerSchema.plugin(autoIncrement.plugin,'speaker');


const speaker=mongoose.model('Speaker',speakerSchema)
export default speaker