// permitir aplicativos menos seguros no google para funcionamento do e-mail
// https://accounts.google.com/signin/v2/challenge/pwd?continue=https%3A%2F%2Fmyaccount.google.com%2Flesssecureapps&service=accountsettings&osid=1&rart=ANgoxccuMVIgjUsXDJb9EU8xGJUK-Wj4FmMlLisTdXcSD-sNZY1HtB0tAhtSIQcPFo2RN_4OFWxQIEM4z6_Dej0pF0pSZUsskQ&TL=AM3QAYbMwLuM3Yv1sY_018wOiUQ-Q-as7JSjJ8qFUqiC-KRP713dhA1ZAIdbP_8g&flowName=GlifWebSignIn&cid=1&flowEntry=ServiceLogin
import { EmailStorage } from "./storage";
import nodemailer from 'nodemailer';
import SMTPTransport from "nodemailer/lib/smtp-transport";

export class EmailService{

    public readonly _emailStorage;

    constructor(){
        this._emailStorage = new EmailStorage();
    }
    public async SendEmailTest(id: string){
        
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 25,
            secure: false,
            auth: {
                user: "alexsaraujo92@gmail.com",
                //adc em arquivos de config
                pass: ""
            },
            tls: { rejectUnauthorized: false }
          });

          //adc em arquivos de config ou database
          const mailOptions = {
            from: 'alexsaraujo92@gmail.com',
            to: 'alexaraujo_rj@yahoo.com.br',
            subject: 'E-mail enviado usando Node!',
            text: `Segue Link do nosso teste:
                http://localhost:3000/api/test/${id}
                obrigado por participar!
            </html>`
          };

          transporter.sendMail(mailOptions, function(err: Error | null, info: SMTPTransport.SentMessageInfo){
            if (err) {
              console.log(err);
            } else {
              console.log('Email enviado: ' + info.response);
            }
          });
    }

    public async SendEmailMeeting(){
    }
    
}