import Candidate from "./candidate";
import { RegistryStorageFake } from "./registry-storageFake";

export class RegistryService{
    
    public readonly _registryStorage;

    constructor(){
        this._registryStorage = new RegistryStorageFake();
    }

    public async CreateCandidate(candidate: Candidate){

        if(candidate.name == null || candidate.birthdate == null || candidate.email == null ||
            candidate.phone == null){
                return null;
        }

        if(await this._registryStorage.CreateCandidate(candidate)){
            return true;
        }
        
        return false;
    }
}


