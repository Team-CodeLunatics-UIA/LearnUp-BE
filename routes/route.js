import express, { Router } from 'express';
//import requireLoginDistrict from '../middleware/requireLoginDistrict';
//import requireLoginSchool from '../middleware/requireLoginSchool';
import {updatePerformancePrediction,SignupDistrict,SignupSchool,Login} from '../controllers/updatecontrollers.js';
const router  = express.Router();

router.post('/login',Login);
router.post('/signupschool',SignupSchool);
router.post('/signupdistrict',SignupDistrict);
router.post('/studentperformance',updatePerformancePrediction);


export default router;