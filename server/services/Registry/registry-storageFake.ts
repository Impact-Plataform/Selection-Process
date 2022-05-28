import Candidate from "../Registry/candidate";

export class RegistryStorageFake{

    public static _dbCandidate: Array<Candidate> = [];

    public async CreateCandidate(candidate: Candidate){
        try{
            RegistryStorageFake._dbCandidate.push(candidate);
            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }

}