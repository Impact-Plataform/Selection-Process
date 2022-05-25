import { EmailStorage } from "./storage";

export class EmailService{

    public readonly _emailStorage;

    constructor(){
        this._emailStorage = new EmailStorage();
    }

    public async SendEmailTest(){
        return true;
    }

    public async SendEmailMeeting(){
    }
    
}