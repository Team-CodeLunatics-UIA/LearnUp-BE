import express, { Router } from 'express';
//import requireLoginDistrict from '../middleware/requireLoginDistrict';
//import requireLoginSchool from '../middleware/requireLoginSchool';
import {updatePerformancePrediction} from '../controllers/updatecontrollers.js';
const router  = express.Router();

// router.post('/loginschool',LoginSchool);
// router.post('/logindistrict',LoginDistrict);
// router.post('/signupschool',SignupSchool);
//router.post('/signupdistrict',SignupDistrict);
router.post('/studentperformance',updatePerformancePrediction);


export default router;