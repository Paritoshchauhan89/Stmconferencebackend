import express from "express";
import {addEnroll,getEnroll,  getEnrollments, deleteEnrolls } from "../controller/enrollment-controller.js";

//router object
const router = express.Router();

// enroll section
router.post('/conference-enrollment',addEnroll);
router.get('/all-enrollments',getEnrollments);
router.get('/enroll:id',getEnroll);
router.delete('/enroll:id',deleteEnrolls);


export default router;