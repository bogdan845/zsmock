export class PageModel {
    content: string;
    title? : string;
    img? : string;

    constructor(public data: any) {
        this.content = data.content.rendered || "";
        this.title = data.title.rendered || "";
        this.img = "" // find out image in postman
    }
}