import { EmailService } from "../Email/emailService";
import { QuestionaireService } from "../Questionaire/questionaire-service";
import { NextFunction, Request, Response } from "express";
import { RegistryService } from "../Registry/registry-service";
import log from "../../logger/logger";
import { Requests } from "../common/_requests";

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

        var candidate = Requests.Candidate(req.body.name, req.body.birthdate, 
            req.body.email, req.body.phone, req.body.how_knew_plataforma );

        if(candidate == null){
            //bad request
        }else{
            try {
                var registerId = await this._registryService.CreateCandidate(candidate);
                //await this._emailService.SendEmailTest(registerId);

                return res.status(201).json({
                    message: "Registrado com sucesso!",
                    //registerId: registerId
                })
                
            } catch (error) {
                next(error);
            }
        }
    }

    async GetTest(req: Request, res: Response){
        var test = await this._questionareService.GetTest();
        res.status(200).json(test);
    }

    async SendTest(req: any, res: any){        

    }
}
