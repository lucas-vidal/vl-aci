export class Experience {

        id: number;
        position: string;
        company: string;
        form: string;
        until: string;
        description: string;
        img: string;
        link: string;

        
        constructor(id: number, position: string, company: string, form: string, until: string, description: string, img: string, link: string) {
        
            this.id = id;
            this.position = position;
            this.company = company;
            this.form = form;
            this.until = until;
            this.description = description;
            this.img = img;
            this.link = link;
        
        }
    
}
