import express from "express";
import { addFaq , getFaqs , getFaq , editFaq, deleteFaq } from "../controller/faq-controller.js";


//router object
const router = express.Router();

// faq section

router.post('/add-faq',addFaq);
router.get('/all-faqs',getFaqs);
router.get('/faq:id',getFaq);
router.put('/faq:id',editFaq);
router.delete('/faq:id',deleteFaq);



export default router;