import Contact from '../models/contact-schema.js'

export const addContact = async (request, response) => {

    const contact = request.body;
    const newContact = new Contact(contact);
    try {
        await newContact.save();
        response.status(201).json(newContact);

    } catch (error) {
        response.status(409).json({ message: error.message });

    }
}


export const getContacts = async(request,response)=>{
    try {

      const contacts =  await  Contact.find({});
      response.status(200).json(contacts);
    } catch (error) {
        response.status(404).json({message: error.message});
    }

}






export const deleteContact = async (request, response) => {
    try{
        await Contact.deleteOne({_id: request.params.id});
        response.status(204).json("contact deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}