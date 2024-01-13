import express from "express";
import { addVenue, getVenues , getVenue , editVenue, deleteVenue} from "../controller/venue-controller.js";


//router object
const router = express.Router();


// venue section
router.post('/add-venue',addVenue);
router.get('/all-venues',getVenues);
router.get('/venue:id',getVenue);
router.put('/venue:id',editVenue);
router.delete('/venue:id',deleteVenue);


export default router;