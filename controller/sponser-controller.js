import Sponser from '../models/sponser-schema.js'

export const addSponser = async (request, response) => {
    const sponser = request.body;
    const newSponser = new Sponser(sponser);
    try {
        await newSponser.save();
        response.status(201).json(newSponser);

    } catch (error) {
        response.status(409).json({ message: error.message });

    }
}


export const getSponsers = async(request,response)=>{
    try {

      const sponsers =  await  Sponser.find({});
      response.status(200).json(sponsers);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

}




export const getSponser = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const sponser = await Sponser.findById(request.params.id);
     response.status(202).json(sponser);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editSponser = async(request,response)=>{
   let sponser = request.body;
   const editSponser =  new Sponser(sponser);
   try {
    await Sponser.updateOne({ _id : request.params.id},editSponser);
    response.status(203).json(editSponser);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteSponser = async (request, response) => {
    try{
        await Sponser.deleteOne({_id: request.params.id});
        response.status(204).json("Sponser deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}