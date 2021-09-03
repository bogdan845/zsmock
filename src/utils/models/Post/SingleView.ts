import {PostPreviewModel} from "./PostPreview";


export class SinglePostModel extends PostPreviewModel {
    content: string
    date: string

    constructor(public data: any) {
        super(data);
        this.content = data.content.rendered || '';
        this.date = data.date || ''
    }
}