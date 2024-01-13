import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment' ;

const faqSchema = new mongoose.Schema({
    
    faqheading:String,
    faqparagraph:String,
 
},
  {timestamps:true}
  
  );
autoIncrement.initialize(mongoose.connection);
faqSchema.plugin(autoIncrement.plugin,'faq');


const Faq = mongoose.model('faq',faqSchema)
export default Faq