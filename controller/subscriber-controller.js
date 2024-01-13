
import Subscriber from '../models/subscriber-schema.js'

export const addSubscriber = async (request, response) => {
    const subscriber = request.body;
    const newSubcriber = new Subscriber(subscriber);
    try {
        await newSubcriber.save();
        response.status(201).json(newSubcriber);

    } catch (error) {
        response.status(409).json({ message: error.message });

    }
}


export const getSubscribers = async(request,response)=>{
    try {

      const subscribers =  await  Subscriber.find({});
      response.status(200).json(subscribers);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

}