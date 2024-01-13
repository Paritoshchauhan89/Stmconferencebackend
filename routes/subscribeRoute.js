import express from "express";
import {addSubscriber, getSubscribers} from '../controller/subscriber-controller.js'

//router object
const router = express.Router();

// subscriber 
router.post('/', addSubscriber);
router.get('/all-subscribers',getSubscribers);


export default router;