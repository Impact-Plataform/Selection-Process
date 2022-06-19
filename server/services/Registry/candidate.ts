export class Candidate{

    public name: string;
    public birthdate: string;
    public email: string;
    public phone: string;
    public how_knew_plataforma?: string;
    public speak_english?: string;

    constructor(name: string, birthdate: string, email: string, 
        phone: string, how_knew_plataforma: string, speak_english: string){
        this.name = name;
        this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
        this.how_knew_plataforma = how_knew_plataforma;
        this.speak_english = speak_english;
    }
    
}


