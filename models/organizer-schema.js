import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const organizerSchema = new mongoose.Schema({
    organizerfullname: String,
    organizeremail: String,
    organizerphonenumber: String,
    designation:String,
    department:String,
    affilation:String,
    organizerimage: String,
    organizerkeypoints:String,
    organizeraddress: String,
    organizercountry: String,
    organizerstate: String,
    organizercity: String,
    organizerpincode: String,
    bio:String,
    profileurl: String,
    organizerabout: String,
})
autoIncrement.initialize(mongoose.connection);
organizerSchema.plugin(autoIncrement.plugin,'organizer');


const organizer=mongoose.model('Organizer',organizerSchema)
export default organizer