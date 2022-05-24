import { IRepository } from "../common/contracts/irepository";

export class RegistryService{

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
