import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const venueSchema = new mongoose.Schema({

    nameofplace:String,
    address:String,
    image: String,
    venueurl: String,
    email: String,
    contactnumber: String,
    contactpersonname:String,
    contactpersonemail:String,
    contactpersonnumber:String,
    description:String,
},{timestamps:true}
);
autoIncrement.initialize(mongoose.connection);
venueSchema.plugin(autoIncrement.plugin,'venue');


const Venue=mongoose.model('Venue',venueSchema)
export default Venue