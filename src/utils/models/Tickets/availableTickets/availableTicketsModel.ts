export class AvailableTicketsModel {
    from: string;
    stationsFrom: [];
    to: string;
    stationsTo: [];
    departureDate: string
    departureTime: string
    arrivalDate: string
    arrivalTime: string
    travelTime: () => string

    constructor(public data: any) {
        this.from = data.from.cityName;
        this.stationsFrom = data.from.availableStations;
        this.to = data.to.cityName;
        this.stationsTo = data.to.availableStations;
        this.departureDate = data.depatureDate;
        this.departureTime = data.depatureTime;
        this.arrivalDate = data.arrivalDate;
        this.arrivalTime = data.arrivalTime;
        this.travelTime = data.travelTime;
    }

    calcTravelTime() {
        const departureDate = this.departureDate.split("-");
        const departureTime = this.departureTime.split(':');
        const arrivalDate = this.arrivalDate.split("-");
        const arrivalTime = this.arrivalTime.split(':');

        const fullDepartureDate = departureDate.concat(departureTime)
        const fullArrivalTime = arrivalDate.concat(arrivalTime);

        const [dDate, dMonth, dYear, dHours, dMinutes] = fullDepartureDate;
        const [aDate, aMonth, aYear, aHours, aMinutes] = fullArrivalTime;

        const arrival = new Date(Number(aYear), Number(aMonth), Number(aDate), Number(aHours), Number(aMinutes)).getTime();
        const departure = new Date(Number(dYear), Number(dMonth), Number(dDate), Number(dHours), Number(dMinutes)).getTime();

        const hours = Math.floor((arrival - departure) / (1000 * 60 * 60) % 24);
        const minutes = Math.floor((arrival - departure) / (1000 * 60) % 60);

        return (hours < 10 ? "0" + hours + "h" : hours + "h") + " : "
            + (minutes < 10 ? "0" + minutes + "m" : minutes + "m");
    }
}