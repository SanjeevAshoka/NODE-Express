import express from 'express';
import postController from '../controllers/postControllers.js';
const router = express.Router();

router.route("/").get(postController.getAllPost).post(postController.createNewPost);
router.route('/:id').get(postController.getPostById);

export default router;