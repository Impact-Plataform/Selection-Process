import express from 'express'
import { body } from 'express-validator';
import { LoggerController } from '../logger/loggerController';
import { ManagerService } from '../services/Manager/manager-service';
const router = express.Router();

var managerService = new ManagerService();

router.post('/register', [
  //validação dos dados
  body('name').notEmpty().withMessage("O campo nome é obrigatório"),
  body('birthdate').notEmpty().isDate().withMessage("O campo data de nascimento é obrigatório"),
  body('email').notEmpty().isEmail().withMessage("Um campo email com dado válido é obrigatório"),
  body('phone').notEmpty().withMessage("O campo nome é obrigatório")],
  managerService.Register);


router.get('/test/:id', managerService.GetTest);
//router.post('/test', _ManagerService.SendTest);


router.get('/logs', LoggerController.ReadFile);

router.get('/ping', (req, res) => {
  const dt = new Date();
  res.status(200).json({
    "pong": `${dt.toLocaleTimeString()} - ${dt.toLocaleDateString()}`
  });
});

export default router;
