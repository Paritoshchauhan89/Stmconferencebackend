import Speaker from '../models/speaker-schema.js'

export const addSpeaker = async (request, response) => {
    const speaker = request.body;
    const newSpeaker = new Speaker(speaker);
    try {
        await newSpeaker.save();
        response.status(201).json(newSpeaker);

    } catch (error) {
        response.status(409).json({ message: error.message });

    }
}


export const getSpeakers = async(request,response)=>{
    try {

      const speakers =  await  Speaker.find({});
      response.status(200).json(speakers);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

}




export const getSpeaker = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const speaker = await Speaker.findById(request.params.id);
     response.status(202).json(speaker);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editSpeaker = async(request,response)=>{
   let speaker = request.body;
   const editSpeaker =  new Speaker(speaker);
   try {
    await Speaker.updateOne({ _id : request.params.id},editSpeaker);
    response.status(203).json(editSpeaker);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteSpeaker = async (request, response) => {
    try{
        await Speaker.deleteOne({_id: request.params.id});
        response.status(204).json("Speaker deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}