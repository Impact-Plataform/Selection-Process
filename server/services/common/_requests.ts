import { Candidate } from "../Registry/candidate";

export class Validator{

    static Candidate(name: string, birthdate: string, email: string, 
        phone: string, how_knew_plataforma?: string){

            if(Validator.HasPropertiesCandidate(name, birthdate, email, phone)){

                if(how_knew_plataforma == null){
                    how_knew_plataforma = ''
                }

                return new Candidate(name, birthdate, email,
                    phone, how_knew_plataforma);

            }

            throw new Error;
    }

    private static HasPropertiesCandidate(name: string, birthdate: string, email: string, 
        phone: string){

            if(name == null || birthdate == null || email == null || 
                phone == null){
                    return false;
            }

            //outras validacoes caso necessario ...
            return true;
    }
}
