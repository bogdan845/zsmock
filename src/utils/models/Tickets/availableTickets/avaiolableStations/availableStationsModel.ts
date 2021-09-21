export class AvailableStationsModel {
    tripId: number
    cityId: number
    pointId: number
    cityName: string
    stationName: string
    departureDate: string
    departureTime: string
    stationDelay: string

    constructor(public data: any) {
        this.tripId = data.tripId;
        this.cityId = data.cityId;
        this.pointId = data.pointId;
        this.cityName = data.cityName;
        this.stationName = data.stationName;
        this.departureDate = data.depatureDate;
        this.departureTime = data.depatureTime;
        this.stationDelay = data.stationDelay;
    }
}