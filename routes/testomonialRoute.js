import express from "express";
import {addTestnomial, getTestnomials, getTestnomial,editTestnomial,deleteTestnomial} from '../controller/testnomial-controller.js';


//router object
const router = express.Router();

// testnomial route
router.post('/feedback',addTestnomial);
router.get('/all-testnomials',getTestnomials);
router.get('/testnomial:id',getTestnomial);
router.put('/testnomial:id', editTestnomial);
router.delete('/testnomial:id',deleteTestnomial);


export default router;