import { EmailService } from "../Email/emailService";
import { QuestionaireService } from "../Questionaire/questionaire-service";
import Candidate from "../Registry/candidate";
import { Request, Response } from "express";
import { RegistryService } from "../Registry/registry-service";
var crypto = require("crypto");

export class ManagerService{

    public readonly _emailService;
    public readonly _questionareService;
    public readonly _registryService;

    constructor(){
        this._emailService = new EmailService();
        this._questionareService = new QuestionaireService();
        this._registryService = new RegistryService();
    }

    async Register(req: Request, res: Response){

        var candidate: Candidate = {
            id: crypto.randomBytes(16).toString("hex"),
            name: req.body.name,
            birthdate: req.body.birthdate,
            email: req.body.email,
            phone: req.body.phone,
            interest: req.body.interest,
            knowledge: req.body.knowledge,
            how_knew_plataforma: req.body.how_knew_plataforma,
            speak_english: req.body.speak_english,
        }

        var register = await this._registryService.CreateCandidate(candidate);

        if(register == null){
            return res.status(400).json({
                message: "Dados inválidos!"
            })
        }

        if(register){
            await this._emailService.SendEmailTest();
            return res.status(201).json({
                message: "Registrado com sucesso!"
            })
        }

        return res.status(500).json({
            message: "Erro do servidor! Não foi possivel processar a sua solicitação."
        })
    }

    async GetTest(req: any, res: any){
        
    }

    async SendTest(req: any, res: any){
        
    }
}
