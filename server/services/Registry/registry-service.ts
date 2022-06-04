import { Candidate } from "./candidate";
import { RegistryStorage } from "./registry-storage";

export class RegistryService{
    
    private readonly _registryStorage;

    constructor(){
        this._registryStorage = new RegistryStorage();
    }

    public async CreateCandidate(candidate: Candidate){   
        return await this._registryStorage.CreateCandidate(candidate);
    }
}


