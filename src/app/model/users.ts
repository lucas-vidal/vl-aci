export class user {
    username: string;
    password: string;
    name: string;
    surname: string;
    img: string;
    title: string;
    skill1: string;
    skill2: string;
    skill3: string;
    skill4: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    github: string;
    about: string;

    constructor(username: string, password: string, name: string, surname: string, img: string, title: string, skill1: string, skill2: string, skill3: string, skill4: string, 
                linkedin: string, instagram: string, facebook: string, github: string, about: string) {

        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.img = img;
        this.title = title;
        this.skill1 = skill1;
        this.skill2 = skill2;
        this.skill3 = skill3;
        this.skill4 = skill4;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.facebook = facebook;
        this.github = github;
        this.about = about;
    }
}
