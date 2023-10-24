import express from 'express';
import UserController from '../controllers/studentController.js';

const router = express.Router();

router.get('/', UserController.home);
router.get('/registration', UserController.registration);
router.post('/registration', UserController.createUserDoc);
router.post('/login',UserController.verify, UserController.login);
// router.post('/login', UserController.verify);

export default router;