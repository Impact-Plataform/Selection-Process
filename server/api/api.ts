import express from 'express'
import { LoggerController } from '../logger/loggerController';
const router = express.Router();
//EmailService = require('../services/Email/emailService');

//const em = new EmailService();

//router.post('/register', userController.getAllUsers);
//router.get('/test', userController.getAllUsers);
//router.post('/test', userController.getAllUsers);
router.get('/logs', LoggerController.ReadFile);

export default router;