import { IRepository } from "../common/contracts/irepository";
import Candidate from "../Registry/candidate";

export class ManagerService{

    public _db: IRepository;

    constructor(db: IRepository){
        this._db = db;
    }

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

        this._db.CreateCandidate(candidate);
        res.json({
            Message: true
        })
    }

    async GetTest(req: any, res: any){
        
    }

    async SendTest(req: any, res: any){
        
    }
}
