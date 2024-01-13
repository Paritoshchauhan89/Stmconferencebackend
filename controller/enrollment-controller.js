import Enrollment from '../models/enrollment-schema.js'

export const addEnroll = async (request, response) => {
    const enroll = request.body;
    const newEnroll = new Enrollment(enroll);
    try {
        await newEnroll.save();
        response.status(201).json(newEnroll);

    } catch (error) {
        response.status(409).json({ message: error.message });

    }
}


export const getEnrollments = async(request,response)=>{
    try {

      const enrolls =  await  Enrollment.find({});
      response.status(200).json(enrolls);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

}



export const getEnroll = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const enroll = await Enrollment.findById(request.params.id);
     response.status(202).json(enroll);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const deleteEnrolls = async (request, response) => {
    try{
        await Enrollment.deleteOne({_id: request.params.id});
        response.status(204).json("Enrolls deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}


