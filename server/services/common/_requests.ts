import { Candidate } from "../Registry/candidate";

export class Converter{

    static CreateCandidate(name: string, birthdate: string, email: string, 
        phone: string, how_knew_plataforma?: string, speak_english?: string){

        if(how_knew_plataforma == null){
            how_knew_plataforma = ''
        }

        if(speak_english == null){
            speak_english = ''
        }

        return new Candidate(name, birthdate, email,
            phone, how_knew_plataforma, speak_english);
    }

}
