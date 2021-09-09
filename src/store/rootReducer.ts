import {combineReducers} from "redux";
import {INewsState, newsReducer} from "./news/newsReducer";
import {ISpecialOffersState, offersReducer} from "./specialOffers/offersReducer";
import {contactsReducer} from "./contacts/contactsReducer";
import {frequentlyQReducer, IFrequentlyQState} from "./frequentlyQ/frequentlyQReducer";
import {IPage} from "../utils/interfaces/pageState/pageState";
import {vacanciesReducer} from "./vacancies/vacanciesReducer";
import {busServiceReducer} from "./busService/busServiceReducer";
import {mediaServiceReducer} from "./mediaService/mediaServiceReducer";
import {aboutUsReducer} from "./aboutUs/aboutUsReducer";
import {carParkReducer} from "./carPark/carParkReducer";
import {interFlightsReducer} from "./interFlights/interFlightsReducer";
import {vipAutoReducer} from "./vipAuto/vipAutoReducer";
import {supportReducer} from "./support/supportReducer";
import {coffeeReducer} from "./coffee/coffeeReducer";
import {driversReducer} from "./dirvers/driversReducer";
import {paymentReducer} from "./payment/paymentReducer";
import {waitingHallReducer} from "./waitingHall/waitingHallReducer";
import {ITicketsState, ticketsReducer} from "./tickets/ticketsReducer";

export interface IRootState {
    news: INewsState;
    specialOffers: ISpecialOffersState;
    contacts: IPage;
    frequentlyQ: IFrequentlyQState;
    vacancies: IPage;
    aboutUs: IPage;
    busService: IPage;
    mediaService: IPage;
    carPark: IPage;
    interFlights: IPage;
    vipAuto: IPage;
    support: IPage;
    coffee: IPage;
    drivers: IPage;
    payment: IPage;
    waitingHall: IPage;
    tickets: ITicketsState
};


export const rootReducer = combineReducers({
    news: newsReducer,
    specialOffers: offersReducer,
    contacts: contactsReducer,
    frequentlyQ: frequentlyQReducer,
    vacancies: vacanciesReducer,
    aboutUs: aboutUsReducer,
    busService: busServiceReducer,
    mediaService: mediaServiceReducer,
    carPark: carParkReducer,
    interFlights: interFlightsReducer,
    vipAuto: vipAutoReducer,
    support: supportReducer,
    coffee: coffeeReducer,
    drivers: driversReducer,
    waitingHall: waitingHallReducer,
    payment: paymentReducer,
    searchTickets: ticketsReducer
});