import i18n from "i18next";
import {IFormProps} from "../../../../pages/Home/components/Tickets/Tickets";

export enum TicketsSort {
    DEPART = "DEPART"
}

export enum TicketsTransfer {
    ALL = "ALL"
}

export class SearchTicketsModel {
    from: { cityId: string }
    to: { cityId: string }
    time: string
    date: string
    passengersAdultCount: number
    children: []
    lang: string
    sort: string
    transfer: string
    currentDate: Date

    constructor(public data: IFormProps) {
        this.from = {cityId: data.from?.cityId || ""};
        this.to = {cityId: data.to?.cityId || ""};
        this.time = data.time || "";
        this.date = data.date || "";
        this.passengersAdultCount = data.passengersAdultCount || 0;
        this.children = data.children || [];
        this.lang = i18n.language || "";
        this.sort = TicketsSort.DEPART;
        this.transfer = data.transfer || "";
        this.currentDate = new Date()
    }

    public getMinutes(date: Date) {
        return date.getMinutes() < 10
            ? "0" + date.getMinutes()
            : date.getMinutes();
    }

    public getDate(date: Date) {
        return date.getDate() < 10
            ? "0" + date.getDate()
            : date.getDate();
    }

    public getMonth(date: Date) {
        return date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
    }

    public valueToTime() {
        return this.time = this.currentDate.getHours() + ":" + this.getMinutes(this.currentDate);
    }

    public valueToDate() {
        return this.date = this.currentDate.getFullYear() +
            "-" + this.getMonth(this.currentDate) +
            "-" + this.getDate(this.currentDate);
    }

    public readyPayload() {
        return {
            from: {cityId: this.from.cityId},
            to: {cityId: this.to.cityId},
            time: this.valueToTime(),
            date: this.valueToDate(),
            passengersAdultCount: this.passengersAdultCount,
            children: this.children,
            lang: this.lang,
            sort: this.sort,
            transfer: TicketsTransfer.ALL
        }
    }
}