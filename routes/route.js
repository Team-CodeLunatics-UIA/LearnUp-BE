import express, { Router } from 'express';
//import requireLoginDistrict from '../middleware/requireLoginDistrict';
//import requireLoginSchool from '../middleware/requireLoginSchool';
import {updatePerformancePrediction,Signup,Login,UploadStudentData,UploadAttendance} from '../controllers/updatecontrollers.js';
const router  = express.Router();

router.post('/login',Login);
router.post('/signup',Signup);
router.post('/studentperformance',updatePerformancePrediction);
router.post('/uploadstudentdata',UploadStudentData);
router.post('/uploadattendance',UploadAttendance);

export default router;