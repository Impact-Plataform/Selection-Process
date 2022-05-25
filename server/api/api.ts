import express from 'express'
import { LoggerController } from '../logger/loggerController';
import { ManagerService } from '../services/Manager/manager-service';

const router = express.Router();

var managerService = new ManagerService();

router.post('/register', managerService.Register);
//router.get('/test', _ManagerService.GetTest);
//router.post('/test', _ManagerService.SendTest);

router.get('/logs', LoggerController.ReadFile);

export default router;