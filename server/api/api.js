const { Router } = require('express');
const router = Router();
const EmailService = require('../services/Email/emailService');

const em = new EmailService();
router.post('/register', userController.getAllUsers);
router.get('/test', userController.getAllUsers);
router.post('/test', userController.getAllUsers);

module.exports = router;