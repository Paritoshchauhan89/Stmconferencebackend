import express from "express";
import {addSponser, getSponsers, getSponser, editSponser,deleteSponser}  from "../controller/sponser-controller.js";

//router object
const router = express.Router();


// sponser Route
router.post('/add-sponser',addSponser);
router.get('/all-sponsers',getSponsers);
router.get('/sponser:id',getSponser);
router.put('/sponser:id', editSponser);
router.delete('/sponser:id',deleteSponser);


export default router;