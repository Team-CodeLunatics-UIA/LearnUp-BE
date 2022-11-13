import express, { Router } from 'express';
import requireLoginDistrict from '../middleware/requireLoginDistrict';
import requireLoginSchool from '../middleware/requireLoginSchool';
import {LoginSchool,LoginDistrict,SignupSchool,SignupDistrict} from '../controllers/updatecontrollers';
const router  = express.Router();

router.post('/loginschool',LoginSchool);
router.post('/logindistrict',LoginDistrict);
router.post('/signupschool',SignupSchool);
router.post('/signupdistrict',SignupDistrict);


export default router;