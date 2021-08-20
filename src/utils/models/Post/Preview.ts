export class PostPreviewModel {
    link: string;
    img: string;
    title: string;
    shortDescription: string;

    constructor(public data: any) {
        this.link = data
        this.link = data.slug || '';
        this.img = data._embedded["wp:featuredmedia"][0]["source_url"] || '';
        this.title = data.title.rendered || '';
        this.shortDescription = data.excerpt.rendered || '';
    }
}