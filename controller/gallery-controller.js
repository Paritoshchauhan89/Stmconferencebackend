import Gallery from '../models/gallery-schema.js'

export const addGallery = async (request, response) => {
    const gallery = request.body;
    const newGallery = new Gallery(gallery);
    try {
        await newGallery.save();
        response.status(201).json(newGallery);

    } catch (error) {
        response.status(409).json({ message: error.message });

    }
}


export const getGallerys = async(request,response)=>{
    try {

      const gallerys =  await  Gallery.find({});
      response.status(200).json(gallerys);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

}




export const getGallery = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const gallery = await Gallery.findById(request.params.id);
     response.status(202).json(gallery);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editGallery = async(request,response)=>{
   let gallery = request.body;
   const editGallery =  new Gallery(gallery);
   try {
    await Gallery.updateOne({ _id : request.params.id},editGallery);
    response.status(203).json(editGallery);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteGallery = async (request, response) => {
    try{
        await Gallery.deleteOne({_id: request.params.id});
        response.status(204).json("Gallery deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}