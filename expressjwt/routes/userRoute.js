import express from "express";
import UserController from "../controllers/userController.js";
const router = express.Router()

// Public Routes
router.post('/register', UserController.userRegistration);
router.post('/login', UserController.userLogin)
// Private Routes

export default router;