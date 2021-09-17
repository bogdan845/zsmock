export class AvailableTicketsModel {
    from: string;
    to: string;
    departureDate: string
    departureTime: string
    arrivalDate: string
    arrivalTime: string


    constructor(public data: any) {
        this.from = data.from.cityName;
        this.to = data.to.cityName;
        this.departureDate = data.depatureDate;
        this.departureTime = data.depatureTime;
        this.arrivalDate = data.arrivalDate;
        this.arrivalTime = data.arrivalTime;
    }
}