import { EmailService } from "../Email/emailService";
import { QuestionaireService } from "../Questionaire/questionaire-service";
import Candidate from "../Registry/candidate";
import { NextFunction, Request, Response } from "express";
import { RegistryService } from "../Registry/registry-service";
import log from "../../logger/logger";
var crypto = require("crypto");

export class ManagerService {

    public readonly _emailService;
    public readonly _questionareService;
    public readonly _registryService;

    constructor() {
        this._emailService = new EmailService();
        this._questionareService = new QuestionaireService();
        this._registryService = new RegistryService();
    }

    public Register = async (req: Request, res: Response, next: NextFunction) => {

//         var candidate: Candidate = {
//             id: crypto.randomBytes(16).toString("hex"),
//             name: req.body.name,
//             birthdate: req.body.birthdate,
//             email: req.body.email,
//             phone: req.body.phone,
//             interest: req.body.interest,
//             knowledge: req.body.knowledge,
//             how_knew_plataforma: req.body.how_knew_plataforma,
//             speak_english: req.body.speak_english,
//         }
        try {
            const registerId = await this._registryService.CreateCandidate(candidate);
            await this._emailService.SendEmailTest(registerId);
            return res.status(201).json({
                message: "Registrado com sucesso!"
            })
        } catch (error) {
            next(error);
        }
    }

    async GetTest(req: Request, res: Response){
        var test = await this._questionareService.GetTest();
        res.status(200).json(test);
    }

    async SendTest(req: any, res: any){        

    }
}
