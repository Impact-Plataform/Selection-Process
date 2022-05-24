import express from 'express'
import { LoggerController } from '../logger/loggerController';
import { ManagerService } from '../services/Manager/managerService';
import { RepositoryFake } from '../services/repository/repositoryFake';
const router = express.Router();

var _RepositoryFake = new RepositoryFake();
var _ManagerService = new ManagerService(_RepositoryFake);

router.post('/register', _ManagerService.CreateCandidate);
router.get('/test', _ManagerService.GetTest);
router.post('/test', _ManagerService.SendTest);

router.get('/logs', LoggerController.ReadFile);

export default router;