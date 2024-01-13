import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const testnomialSchema = new mongoose.Schema({

    
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    institute:{
        type:String,
        required:[true,'institute is required']
    },
    feedback:{
        type:String,
        required:[true,'feedback is required']
    },
    permission:{
        type:Boolean,
        default:true,
    }
},
{timestamps:true},
)
autoIncrement.initialize(mongoose.connection);
testnomialSchema.plugin(autoIncrement.plugin,'testnomial');


const testnomial=mongoose.model('Testnomial',testnomialSchema)
export default testnomial