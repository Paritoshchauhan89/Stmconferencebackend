import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import colors from 'colors'
import morgan from 'morgan';
import Speaker from './routes/speakerRoute.js';
import Sponser from './routes/sponserRoute.js'
import Organizer from './routes/organizerRoute.js';
import Subscriber from './routes/subscribeRoute.js'
import Faq from './routes/faqRoute.js'
import Venue from './routes/venueRoute.js'
import Enrollment from './routes/enrollRoute.js'
import Conference from './routes/conferenceRoute.js';
import Contact from './routes/contactRoute.js'
import Gallery from './routes/galleryRoute.js'
import News from './routes/newsRoute.js'
import Testmonial from './routes/testomonialRoute.js'
import Auth from './routes/authRoute.js'
import Image from './routes/imageRoute.js'



// configure env
dotenv.config();

//databse config
Connection();

// rest object
const app = express();

// router import 

app.use(bodyParser.json({externals:true}));
app.use(bodyParser.urlencoded({extended:true}));


// middelwares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


// routes
app.use("/api/v1/auth",Auth);
app.use("/api/v1/speaker",Speaker);
app.use("/api/v1/sponser",Sponser);
app.use("/api/v1/organizer",Organizer);
app.use("/api/v1/",Subscriber);
app.use("/api/v1/faq",Faq);
app.use("/api/v1/venue",Venue);
app.use("/api/v1/enrollment",Enrollment);
app.use("/api/v1/conference",Conference);
app.use("/api/v1/contact",Contact);
app.use("/api/v1/gallery",Gallery);
app.use("/api/v1/news",News);
app.use("/api/v1/testmonial",Testmonial);
app.use("/api/v1/image",Image);




// rest api 
app.get("/",(req,res)=>{
    res.send("<h1>Stm Conference Backend is Live</h1>")
})



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(colors.bgCyan.white(`server is running at http://localhost${PORT} ${process.env.WEBNAME}`)));