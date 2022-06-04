import { Candidate } from "../Registry/candidate";

export class RegistryStorageFake{

    public static _dbCandidate: Array<Candidate> = [];

    public async CreateCandidate(candidate: Candidate){
        try{
            RegistryStorageFake._dbCandidate.push(candidate);
            return this.GetUuidFake();
        }
        catch(error){
            console.log(error);
            return '';
        }
    }

    private GetUuidFake():string {
        var idFake = '';
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 20; i++) {
            idFake += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return idFake;
    }
}