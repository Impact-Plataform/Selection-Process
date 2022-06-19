import { Database } from "../common/Database/Database";
import { Candidate } from "./candidate";

export class RegistryStorage{

    private readonly _db: Database;

    constructor(){
        this._db = Database.getInstance();
    }
    
    async CreateCandidate(candidate: Candidate){        
        const query = "INSERT INTO candidates (name, birthdate, email, phone, how_knew_plataforma) VALUES ($1, $2, $3, $4, $5) RETURNING id";
        const params = [candidate.name, candidate.birthdate, candidate.email, candidate.phone, candidate.how_knew_plataforma];
        const result = await this._db.run(query, params);
        
        return result;
    }        
    
}
