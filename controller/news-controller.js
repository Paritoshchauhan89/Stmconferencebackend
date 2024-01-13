import News from '../models/news-schema.js'


// news section

export const addNews = async (request, response) => {

    const news = request.body;

    const newNews = new News(news);
    try {
        await newNews.save();
        response.status((200).json(newNews));
    } catch (error) {
        response.status({ message: error.message });
    }

}


export const getNewss = async(request,response)=>{
    try {
     const newss = await News.find({});
     response.status(201).json(newss);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const getNews = async(request,response)=>{
    try {
    //  const user = await User.find({ _id: request.params.id});
    const news = await News.findById(request.params.id);
     response.status(202).json(news);
    } catch (error) {
        response.status(402).json({message: error.message});
    }
}

export const editNews = async(request,response)=>{
   let news = request.body;
   const editNews =  new News(news);
   try {
    await News.updateOne({ _id : request.params.id},editNews);
    response.status(203).json(editNews);
   } catch (error) {
    response.status(403).json({message: error.message});
    
   }
}

export const deleteNews = async (request, response) => {
    try{
        await News.deleteOne({_id: request.params.id});
        response.status(204).json("News deleted Successfully");
    } catch (error){
        response.status(404).json({ message: error.message});     
    }
}