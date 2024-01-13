import Venue from '../models/venue-schema.js'


// news section

export const addVenue = async (request, response) => {

    const venue = request.body;

    const newVenue = new Venue(venue);
    try {
        await newVenue.save();
        response.status((200).json(newVenue));
    } catch (error) {
        response.status({ message: error.message });
    }

}


export const getVenues = async(request,response)=>{
    try {
     const venues = await Venue.find({});
     response.status(201).json(venues);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const getVenue = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const venue = await Venue.findById(request.params.id);
     response.status(202).json(venue);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editVenue = async(request,response)=>{
   let venue = request.body;
   const editVenue =  new Venue(venue);
   try {
    await Venue.updateOne({ _id : request.params.id},editVenue);
    response.status(203).json(editVenue);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteVenue = async (request, response) => {
    try{
        await Venue.deleteOne({_id: request.params.id});
        response.status(204).json("venue deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}