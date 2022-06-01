import express from 'express'
import { LoggerController } from '../logger/loggerController';
import { ManagerService } from '../services/Manager/manager-service';
import log from '../logger/logger';
const router = express.Router();

var managerService = new ManagerService();

router.post('/register', async(req , res) => managerService.Register(req, res));
router.get('/test/:id', async(req, res) => managerService.GetTest(req, res));
//router.post('/test', _ManagerService.SendTest);

router.get('/logs', LoggerController.ReadFile);

router.get('/ping', (req, res) => {
  const dt = new Date();
  res.status(200).json({
    "pong": `${dt.toLocaleTimeString()} - ${dt.toLocaleDateString()}`
  });
});

export default router;