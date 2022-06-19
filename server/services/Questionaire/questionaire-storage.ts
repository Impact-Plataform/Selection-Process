import { Database } from "../common/Database/Database";

export class QuestionaireStorage{

    private readonly _db: Database;

    constructor(){
        this._db = Database.getInstance();
    }

    async GetQuestionaire(){
        const query = "SELECT * FROM questions ORDER BY RANDOM() LIMIT 10";
        const result = await this._db.run(query);
        
        var response = [];

        for await (var element of result) {
            response.push({
                id: element.data[0],
                question: element.data[1],
                options: element.data[2].split("|"),
                answer: element.data[3]
            })
        }

        return response;
    }

    async SendQuestionaire(){
        
    }
    
}