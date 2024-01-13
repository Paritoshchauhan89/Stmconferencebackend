import Conference from '../models/conference-schema.js'

export const addConference = async (request, response) => {

  const conference = request.body;
  const newConference = new Conference(conference);
  try {
      await newConference.save();
      response.status(201).json(newConference);

  } catch (error) {
      response.status(409).json({ message: error.message });

  }
}


export const getConferences = async(request,response)=>{
    try {

      const conferences =  await Conference.find({});
      response.status(200).json(conferences);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

}




export const getConference = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const conference = await Conference.findById(request.params.id);
     response.status(201).json(conference);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const editConference = async(request,response)=>{
   let conference = request.body;
   const editConference =  new Conference(conference);
   try {
    await Conference.updateOne({ _id : request.params.id},editConference);
    response.status(203).json(editConference);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteConference = async (request, response) => {
    try{
        await Conference.deleteOne({_id: request.params.id});
        response.status(204).json("conference deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}