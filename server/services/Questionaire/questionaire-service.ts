import { IRepository } from "../common/contracts/irepository";

export class QuestionaireService{

    public _db: IRepository;

    constructor(db: IRepository){
        this._db = db;
    }

    async CreateCandidate(){
    }

    async GetTest(){
    }

    async SendTest(){
    }
}
