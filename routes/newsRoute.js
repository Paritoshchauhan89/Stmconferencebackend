import express from "express";
import { addNews, getNewss, getNews, editNews, deleteNews } from '../controller/news-controller.js';

//router object
const router = express.Router();


// news section

router.post('/add-news',addNews);
router.get('/all-news',getNewss);
router.get('/news:id',getNews);
router.put('/news:id',editNews);
router.delete('/news:id',deleteNews);



export default router;