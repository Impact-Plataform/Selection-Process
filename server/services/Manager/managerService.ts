import { IRepository } from "../common/contracts/irepository";
import { EmailService } from "../Email/emailService";
import { QuestionaireService } from "../Questionaire/questionaire-service";
import Candidate from "../Registry/candidate";
import { RegistryService } from "../Registry/registry-service";

export class ManagerService{

    public _emailService = new EmailService();
    public _questionareService = new QuestionaireService();
    public _registryService = new RegistryService();

    async CreateCandidate(req: any, res: any){

        var candidate: Candidate = {
            name: req.body.name,
            birthdate: req.body.birthdate,
            email: req.body.email,
            phone: req.body.phone,
            interest: req.body.interest,
            knowledge: req.body.knowledge,
            how_knew_plataforma: req.body.how_knew_plataforma,
            speak_english: req.body.speak_english,
        }

    }

    async GetTest(req: any, res: any){
        
    }

    async SendTest(req: any, res: any){
        
    }
}
