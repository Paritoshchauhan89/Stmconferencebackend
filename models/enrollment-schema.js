import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const enrollSchema = new mongoose.Schema({
    

    firstname:{
        type:String,
        require:[true,'first name is required'],
    },
    lastname:{
        type:String,
        require:[true,'last name is required'],
    },
    email:{
        type:String,
        require:[true,'email  is required'],
        unique: true,
    },
    contactnumber:{
        type:Number,
        require:[true, 'number is required'],
    },
   address:{
    type:String,
    require:[true, 'address is required'],
   },
 country:{
    type:String,
    require:[true,'country is required'],
 },
     state:{
        type:String,
    require:[true, 'state is required'],
     },
     city:{
        type:String,
    require:[true, 'city is required'],
     },
    pincode:{
        type:Number,
        require:[true, ' pincode is required'],
    },
    academic:{
        type:String,
        require:[true, 'academic is required'],
    },
    remark:{
        type:String,
        require:[true, 'remark is required'],
    },

 
},
  {timestamps:true}
  
  );
autoIncrement.initialize(mongoose.connection);
enrollSchema.plugin(autoIncrement.plugin,'enroll');


const Enrollment = mongoose.model('enroll',enrollSchema)
export default Enrollment