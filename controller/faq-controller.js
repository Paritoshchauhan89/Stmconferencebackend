import Faq from '../models/faq-schema.js'

export const addFaq = async (request, response) => {
    const faq = request.body;
    const newFaq = new Faq(faq);
    try {
        await newFaq.save();
        response.status(201).json(newFaq);

    } catch (error) {
        response.status(409).json({ message: error.message });

    }
}


export const getFaqs = async(request,response)=>{
    try {

      const faqs =  await  Faq.find({});
      response.status(200).json(faqs);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

}




export const getFaq = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const faq = await Faq.findById(request.params.id);
     response.status(201).json(faq);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const editFaq = async(request,response)=>{
   let faq = request.body;
   const editFaq =  new Faq(faq);
   try {
    await Faq.updateOne({ _id : request.params.id},editFaq);
    response.status(203).json(editFaq);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteFaq = async (request, response) => {
    try{
        await Faq.deleteOne({_id: request.params.id});
        response.status(204).json("faq deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}