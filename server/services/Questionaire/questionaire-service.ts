import { QuestionaireStorageFake } from "./questionaire-storageFake";

export class QuestionaireService{

    public readonly _questionaireStorage;

    constructor(){
        this._questionaireStorage = new QuestionaireStorageFake();
    }

    public async GetTest(){
        return this._questionaireStorage.GetQuestionaire();
    }

    public async SendTest(){
        //this._questionaireStorage.SendQuestionaire();
    }
}
