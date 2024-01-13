import express from "express";
import { addOrganizer, getOrganizers, getOrganizer, editOrganizer, deleteOrganizer } from '../controller/organizer-controller.js';


//router object
const router = express.Router();

// Organizer route 
router.post('/add-organizer',addOrganizer);
router.get('/all-organizers',getOrganizers);
router.get('/organizer:id',getOrganizer);
router.put('/organizer:id',editOrganizer);
router.delete('/organizer:id',deleteOrganizer);


export default router;