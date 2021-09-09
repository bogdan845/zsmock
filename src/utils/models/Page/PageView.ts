export class PageModel {
    content: string;
    title?: string;
    img?: string;

    constructor(public data: any) {
        this.content = data.content.rendered || "";
        this.title = data.title.rendered || "";
        this.img = data["_embedded"] ? data["_embedded"]["wp:featuredmedia"][0]["source_url"] : "";
    }
}