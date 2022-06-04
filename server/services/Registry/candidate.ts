export class Candidate {
    public id: string
    public name: string
    public birthdate: string
    public email: string
    public phone: string
    public how_knew_plataforma?: string
    constructor(payload: any) {
        this.id = payload.id
        this.name = payload.name
        this.birthdate = payload.birthdate
        this.email = payload.email
        this.phone = payload.phone
        this.how_knew_plataforma = payload.how_knew_plataforma
    }
}
