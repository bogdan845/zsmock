export class FrequentlyQListModel {
    content: string;
    title: string;

    constructor(public data: any) {
        this.content = data.content.rendered || "";
        this.title = data.title.rendered || "";
    }
}