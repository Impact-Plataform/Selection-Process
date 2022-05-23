import { IRepository } from "../common/contracts/irepository";
import Candidate from "../Registry/candidate";

export class ManagerService{

    public _db: IRepository;

    constructor(db: IRepository){
        this._db = db;
    }

    async CreateCandidate(req: any, res: any){

    }

    async GetTest(req: any, res: any){
        
    }

    async PostTest(req: any, res: any){
        
    }
}
