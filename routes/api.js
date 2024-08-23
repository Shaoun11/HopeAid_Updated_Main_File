import express from 'express';
const router = express.Router();
import * as todoController from '../app/controllers/todoController.js';
import * as profileController from '../app/controllers/profileController.js'
import * as donationCards from '../app/controllers/donationController.js'
import {donationBlogByID, donationBlogCreate, donationBlogData} from '../app/controllers/donationBlogController.js';
import { createPayment } from '../app/controllers/paymentController.js';


router.post("/CreateProfile",profileController.CreateProfile)
router.post("/UserLogin",profileController.UserLogin)
router.get("/User", profileController.ShowProfile)
router.post("/donationDataCreate",donationCards.donationDataCreate)
router.get("/donationCard", donationCards.donationDatas)
router.get("/donationCard/:id", donationCards.donationDataByID)

router.post("/donationBlogCreate",donationBlogCreate)
router.get("/donationBlogData", donationBlogData)
router.get("/donationBlogData/:id",donationBlogByID)

router.post('/createpayment',createPayment);

router.post('/store', todoController.store);
router.get('/show', todoController.show);
router.delete('/destroy/:id', todoController.destroy);

export default router; 

