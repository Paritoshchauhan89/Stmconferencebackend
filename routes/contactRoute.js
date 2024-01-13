import express from "express";
import { addContact , getContacts, deleteContact} from "../controller/contact-controller.js";


//router object
const router = express.Router();

// contact section
router.post('/contact',addContact);
router.get('/all-contacts',getContacts);
router.delete('/contact:id',deleteContact);


export default router;