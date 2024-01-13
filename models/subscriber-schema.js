import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const subscriberSchema = new mongoose.Schema({

    user_email:{
        type:String,
        required:[true,'email is required']
    },
   
})
autoIncrement.initialize(mongoose.connection);
subscriberSchema.plugin(autoIncrement.plugin,'subscriber');


const subscriber=mongoose.model('Subscriber',subscriberSchema)
export default subscriber