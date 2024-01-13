import Testnomial from '../models/testnomial-schema.js';



export const addTestnomial = async (request, response) => {

    const testnomial = request.body;

    const newTestnomial = new Testnomial(testnomial);
    try {
        await newTestnomial.save();
        response.status((200).json(newTestnomial));
    } catch (error) {
        response.status({ message: error.message });
    }

}


export const getTestnomials = async(request,response)=>{
    try {
     const testnomials = await Testnomial.find({});
     response.status(201).json(testnomials);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const getTestnomial = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const testnomial = await Testnomial.findById(request.params.id);
     response.status(202).json(testnomial);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editTestnomial = async(request,response)=>{
    let testnomial = request.body;
    const editTestnomial =  new Testnomial(testnomial);
    try {
     await Testnomial.updateOne({ _id : request.params.id},editTestnomial);
     response.status(203).json(editTestnomial);
    } catch (error) {
     response.status(403).json({message: error.message});
     
    }
 }

export const deleteTestnomial = async (request, response) => {
    try{
        await Testnomial.deleteOne({_id: request.params.id});
        response.status(204).json("Testnomial deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}
