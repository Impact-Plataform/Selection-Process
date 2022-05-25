import { QuestionaireStorage } from "./questionaire-storage";

export class QuestionaireService{

    public readonly _questionaireStorage;

    constructor(){
        this._questionaireStorage = new QuestionaireStorage();
    }

    public async GetTest(){
    }

    public async SendTest(){
    }
}
