import Organizer from '../models/organizer-schema.js';



export const addOrganizer = async (request, response) => {

    const organizer = request.body;

    const newOrganizer = new Organizer(organizer);
    try {
        await newOrganizer.save();
        response.status((200).json(newOrganizer));
    } catch (error) {
        response.status({ message: error.message });
    }

}


export const getOrganizers = async(request,response)=>{
    try {
     const organizers = await Organizer.find({});
     response.status(201).json(organizers);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const getOrganizer = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const organizer = await Organizer.findById(request.params.id);
     response.status(202).json(organizer);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editOrganizer = async(request,response)=>{
   let organizer = request.body;
   const editOrganizer =  new Organizer(organizer);
   try {
    await Organizer.updateOne({ _id : request.params.id},editOrganizer);
    response.status(203).json(editOrganizer);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteOrganizer = async (request, response) => {
    try{
        await Organizer.deleteOne({_id: request.params.id});
        response.status(204).json("Organizer deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}
