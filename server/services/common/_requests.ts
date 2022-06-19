import { Candidate } from "../Registry/candidate";

export class Validator{

    static Candidate(name: string, birthdate: string, email: string, 
        phone: string, how_knew_plataforma?: string, speak_english?: string){

            if(Validator.HasPropertiesCandidate(name, birthdate, email, phone)){

                if(how_knew_plataforma == null){
                    how_knew_plataforma = ''
                }

                if(speak_english == null){
                    speak_english = ''
                }

                return new Candidate(name, birthdate, email,
                    phone, how_knew_plataforma, speak_english);

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
