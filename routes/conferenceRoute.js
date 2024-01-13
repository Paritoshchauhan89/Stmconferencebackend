import express from "express";
import {addConference,getConferences,  getConference, editConference, deleteConference } from "../controller/conference-controller.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();


// conference section
router.post('/add-conference',requireSignIn, isAdmin,addConference);
router.get('/all-conferences',getConferences);
router.get('/conference:id',getConference);
router.put('/conference:id',editConference);
router.delete('/conference:id',deleteConference);


export default router;