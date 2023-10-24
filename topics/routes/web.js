import express from 'express';
import studentController from '../controllers/studentController.js';
const router  =express.Router();

router.get('/about', studentController);

export default router;