import express from "express";
import {addSpeaker, getSpeakers, getSpeaker, editSpeaker,deleteSpeaker}  from "../controller/speaker-controller.js";

//router object
const router = express.Router();

// speaker route

// Register || POST
router.post('/add-speaker',addSpeaker);

// ALL Speaker || GET
router.get('/all-speakers',getSpeakers);

//Single  Speaker || GET
router.get('/speaker:id',getSpeaker);

// UPDATE Speaker || PUT
router.put('/speaker:id',editSpeaker);

//   Remove Speaker || DELETE
router.delete('/speaker:id',deleteSpeaker);

export default router;