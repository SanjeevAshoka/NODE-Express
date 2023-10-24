import express from 'express';
import Controllers from "./user.controller.js";
import Validation from '../auth/token_validation.js';

const router = express.Router();

router.post('/users', Validation.checkToken, Controllers.createUser)
router.get('/all', Validation.checkToken, Controllers.getAllUser);
router.get('/user/:id', Validation.checkToken, Controllers.getUserBYId);
router.put('/user/update',Validation.checkToken, Controllers.updateUser);
router.delete('/user/delete',Validation.checkToken, Controllers.deleteUser);
router.post('/login', Controllers.login);
export default router;