import express from 'express'
import { ChangeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { v2 as cloudinary } from 'cloudinary';
import { protectCompany } from '../middleware/authMiddleware.js';


const router = express.Router()

//Register a company
router.post('/register',upload.single('image'), registerCompany)
//Company login
router.post('/login', loginCompany)
//Get company data
router.get('/company',protectCompany,getCompanyData)
//Post a job
router.post('/post-job',protectCompany,postJob)
//Get Applications Data of Company
router.get('/applicants',protectCompany,getCompanyJobApplicants)
//Get Company job list
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)
//Change Application Status
router.post('/change-status',protectCompany,ChangeJobApplicationsStatus)
//Change Applications Visiblity
router.post('/change-visiblity',protectCompany, changeVisiblity)

export default router