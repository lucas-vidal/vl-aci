export class Education {

    id?: number;
    institute: string;
    certificate: string;
    form: string;
    until: string;
    state: string;
    link: string;
    
    constructor(institute: string, certificate: string, form: string, until: string, state: string, link: string) {
    
        this.institute = institute;
        this.certificate = certificate;
        this.form = form;
        this.until = until;
        this.state = state;
        this.link = link;
    
    }
}
