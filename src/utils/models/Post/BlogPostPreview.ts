import {SinglePostModel} from "./SingleView";

export class BlogPagePostModel extends SinglePostModel {
    shortDescription: string
    date: string

    constructor(public data: any) {
        super(data);
        this.shortDescription = data.excerpt.rendered || "";
        this.date = data.date || ""
    }
}