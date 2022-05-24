import express from 'express'
import { LoggerController } from '../logger/loggerController';
import { ManagerService } from '../services/Manager/managerService';
const router = express.Router();

var _ManagerService = new ManagerService();

router.post('/register', _ManagerService.CreateCandidate);
router.get('/test', _ManagerService.GetTest);
router.post('/test', _ManagerService.SendTest);

router.get('/logs', LoggerController.ReadFile);

export default router;