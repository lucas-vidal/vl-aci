export class Proyects {
    id?: number;
    title: string;
    description: string;
    link: string;
    img: string;

    constructor(id: number, title: string, description: string, link: string, img: string ) {
    
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.img = img;

    }
}
