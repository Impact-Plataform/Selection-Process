import Candidate from "./candidate";
import { RegistryStorage } from "./registry-storage";
import { RegistryStorageFake } from "./registry-storageFake";

export class RegistryService{
    
    public readonly _registryStorage;

    constructor(){
        this._registryStorage = new RegistryStorage();
    }

    public async CreateCandidate(candidate: Candidate){       
        return await this._registryStorage.CreateCandidate(candidate);
    }
}


