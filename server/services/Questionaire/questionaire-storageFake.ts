import Questions from "../Questionaire/question";
import Result from "../Registry/result";

export class QuestionaireStorageFake{
    
    public static _dbQuestions: Array<Questions>;
    public static _dbResults: Array<Result>;

    constructor(){
        QuestionaireStorageFake._dbQuestions = new Array<Questions>(
            {
                id: 1,
                question: "Qual apelido do aurelio?",
                options: ["Cabelo de piscina", "Cocao", "Doenca", "Todas alternativas"],
                answer: "Cabelo de piscina"
            },
            {
                id: 2,
                question: "Qual apelido do Arthur?",
                options: ["Sonic", "Doenca", "3Giga", "Todas alternativas"],
                answer: "Todas alternativas"
            },
            {
                id: 3,
                question: "Qual melhor chefe que ja tive?",
                options: ["Jackson", "Gary", "Arthur", "Outro"],
                answer: "Arthur"
            },
            {
                id: 4,
                question: "Qual te varou?",
                options: ["Alex", "Renato", "Outro", "Jeniffer"],
                answer: "Alex"
            },
            {
                id: 5,
                question: "Arthur aperta um?",
                options: ["Sim", "Não", "Sim, todo dia", "Negativo"],
                answer: "Sim, todo dia"
            },
            {
                id: 6,
                question: "Alex é bonito?",
                options: ["Sim", "Não", "Sim e claro", "Negativo"],
                answer: "Sim e claro"
            },
            {
                id: 7,
                question: "Alex é lindo demais?",
                options: ["Sim", "Não", "Sim e claro", "Negativo"],
                answer: "Sim e claro"
            },
            {
                id: 8,
                question: "Alex é muito, muito lindo?",
                options: ["Sim", "Não", "Sim e claro", "Negativo"],
                answer: "Sim e claro"
            },
            {
                id: 9,
                question: "Arthur é doenca?",
                options: ["Sim", "Não", "Não sei", "Negativo"],
                answer: "Sim"
            },
            {
                id: 10,
                question: "Quem fala trabalho renumerado?",
                options: ["Wolgrand", "Lays", "Gary", "Psicologa"],
                answer: "Gary"
            },
            {
                id: 11,
                question: "Quem fala cala boca Jackson?",
                options: ["Wolgrand", "Lays", "Gary", "Psicologa"],
                answer: "Gary"
            },
            {
                id: 12,
                question: "Quem fala é isso?",
                options: ["Wolgrand", "Lays", "Alex", "Psicologa"],
                answer: "Alex"
            });
    }

    async GetQuestionaire(){
        let question = new Array<Questions>();

        for(var x = 0; x < 10; x++){
            var random = Math.floor(Math.random() * 12)
            while(question.includes(QuestionaireStorageFake._dbQuestions[random])){
                random = Math.floor(Math.random() * 12)
            }
            question.push(QuestionaireStorageFake._dbQuestions[random]);
        }

        return question;
    } 

    async SendQuestionaire(result: Result){
        QuestionaireStorageFake._dbResults.forEach(element => {
            if(result.id == element.id){
                return false;
            }
        });
        
        QuestionaireStorageFake._dbResults.push(result);
        return true;
    };
}