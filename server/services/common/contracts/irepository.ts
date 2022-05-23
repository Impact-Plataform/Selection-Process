import Questions from "../../Questionaire/question";
import Candidate from "../../Registry/candidate";
import Result from "../../Registry/result";

export interface IRepository {
    CreateCandidate: (candidate: Candidate) => Promise<boolean>;
    GetTest: () => Promise<Array<Questions>>;
    SendTest: (result: Result) => Promise<boolean>;
}