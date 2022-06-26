import { EmailService } from "../Email/emailService";
import { QuestionaireService } from "../Questionaire/questionaire-service";
import { NextFunction, Request, Response } from "express";
import { RegistryService } from "../Registry/registry-service";
import { Converter } from "../common/_requests";
import { validationResult } from "express-validator";

export class ManagerService {

    private readonly _emailService;
    private readonly _questionareService;
    private readonly _registryService;

    constructor() {
        this._emailService = new EmailService();
        this._questionareService = new QuestionaireService();
        this._registryService = new RegistryService();
    }

    public Register = async (req: Request, res: Response, next: NextFunction) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array() 
            });
        }
        
        try {
            var candidate = Converter.CreateCandidate(req.body.name, req.body.birthdate, 
                req.body.email, req.body.phone, req.body.how_knew_plataforma, req.body.speak_english);

            var registerId = await this._registryService.CreateCandidate(candidate);
            //await this._emailService.SendEmailTest(registerId);

            return res.status(201).json({
                message: "Registrado com sucesso!",
                registerId: registerId
            })
            
        } catch (error) {
            next(error);
        }

    }

    public GetTest = async(req: Request, res: Response, next: NextFunction) =>{
        try{
            var test = await this._questionareService.GetTest();
            return res.status(200).json({
                test,
                success: true
            });
            
        }catch (error) {
            next(error);
        }
    }

    async SendTest(req: any, res: any){        

    }

}
