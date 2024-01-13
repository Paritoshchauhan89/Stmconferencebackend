import express from "express";
import { addGallery, getGallerys , getGallery , editGallery, deleteGallery} from "../controller/gallery-controller.js";

//router object
const router = express.Router();


// gallery section
router.post('/add-gallery',addGallery);
router.get('/all-gallerys',getGallerys);
router.get('/gallery:id',getGallery);
router.put('/gallery:id',editGallery);
router.delete('/gallery:id',deleteGallery);


export default router;