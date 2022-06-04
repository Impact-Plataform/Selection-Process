import { Candidate } from "./candidate";
import { RegistryStorageFake } from "./registry-storageFake";

export class RegistryService{
    
    private readonly _registryStorage;

    constructor(){
        this._registryStorage = new RegistryStorageFake();
    }

    public async CreateCandidate(candidate: Candidate){  
        this.verififyCandidate(candidate); 
        return await this._registryStorage.CreateCandidate(candidate);
    }

    private verififyCandidate(candidate: Candidate){
        console.log(typeof(candidate))
    }

}


