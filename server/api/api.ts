import express from 'express'
import { LoggerController } from '../logger/loggerController';
const router = express.Router();

//router.post('/register', userController.getAllUsers);
//router.get('/test', userController.getAllUsers);
//router.post('/test', userController.getAllUsers);

router.get('/logs', LoggerController.ReadFile);

export default router;