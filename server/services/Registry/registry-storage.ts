import { Database } from "../common/Database/Database";
import Candidate from "./candidate";

export class RegistryStorage{
    private readonly _db: Database;
    constructor(){
        this._db = Database.getInstance();
    }
    async CreateCandidate(candidate: Candidate): Promise<any>{        
        const query = "INSERT INTO candidates (name, birthdate, email, phone) VALUES ($1, $2, $3, $4) RETURNING id";
        const params = [candidate.name, candidate.birthdate, candidate.email, candidate.phone];
        const result = await this._db.run(query, params);
        
        return result;
    }        
    
}
