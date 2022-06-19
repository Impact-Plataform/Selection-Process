import { QuestionaireStorage } from "./questionaire-storage";

export class QuestionaireService{

    public readonly _questionaireStorage;

    constructor(){
        this._questionaireStorage = new QuestionaireStorage();
    }

    public async GetTest(){
        return await this._questionaireStorage.GetQuestionaire();
    }

    public async SendTest(){
        //this._questionaireStorage.SendQuestionaire();
    }
}
