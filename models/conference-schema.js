import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const conferenceSchema = new mongoose.Schema(
    {
        conferencetitle:{
            type:String,
            require:[true,'title is required'],
        },
       
        conferencestartdate:{
            type:String,
            require:[true,' conference start date required'],
        },
        conferencestarttime:{
            type:String,
            require:[true,' conference start time required'],
        },
        conferenceenddate:{
            type:String,
            require:[true,'conference end date required'],
        },
        conferenceendtime:{
            type:String,
            require:[true,'conference end time required'],
        },
        conferenceimage:{
            type:String,
            require:[true,'conference image is required'],
        },
        sponsersemail:{
            type:String,
            require:[true,'sponsers email is required'],
        },
        speakersemail:{
            type:String,
            require:[true,'speakers email is required'],
        },
        organizername:{
            type:String,
            require:[true,'organizer name is required'],
        },
        venuename:{
            type:String,
            require:[true,'venue name is required'],
        },
        feedbackurl:{
            type:String,
            require:[true,' feedback url is required'],
        },
        description:{
            type:String,
            require:[true,'description is required'],
        },
        manuscriptsubmissionurl:{
            type:String,
            require:[true,' manuscript submission url is required'],
        },
        manuscriptsubmissiondate:{
            type:String,
            require:[true,' manuscript submission date is required'],
        },
        manuscriptenddate:{
            type:String,
            require:[true,'end date is required'],
        },
        onlineoffline:{
            type:String,
            require:[true,'end date is required'],
        },
        conferencekeypoints:{
            type:String,
            require:[true,'end date is required'],
        },

    },{timestamps:true}
);


autoIncrement.initialize(mongoose.connection);
conferenceSchema.plugin(autoIncrement.plugin,'conference');

const Conference = mongoose.model("Conference", conferenceSchema);

export default Conference;
