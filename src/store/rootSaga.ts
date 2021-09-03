import {all} from "redux-saga/effects";
import {latestNewsSaga} from "./news/sagas/latest/latestNewsSaga";
import {singlePostSaga} from "./news/sagas/singlePost/singlePostSaga";
import {newsBlogSaga} from "./news/sagas/newsBlog/newsBlogSaga";
import {offersSaga} from "./specialOffers/sagas/offers/offersSaga";
import {singleOfferSaga} from "./specialOffers/sagas/singleOffer/singleOfferSaga";
import {vacanciesPageSaga} from "./vacancies/sagas/vacanciesPageSaga";
import {contactsPageSaga} from "./contacts/sagas/contactsPageSaga";
import {frequentlyQPageSaga} from "./frequentlyQ/sagas/frequentlyQPageSaga";
import {busServicePageSaga} from "./busService/sagas/busServicePageSaga";
import {mediaServicePageSaga} from "./mediaService/sagas/mediaServicePageSaga";
import {aboutUsPageSaga} from "./aboutUs/sagas/aboutUsPageSaga";
import {carParkPageSaga} from "./carPark/sagas/carParkPageSaga";
import {interFlightsPageSaga} from "./interFlights/sagas/interFlightsPageSaga";
import {vipAutoPageSaga} from "./vipAuto/sagas/vipAutoPageSaga";
import {supportPageSaga} from "./support/sagas/supportPageSaga";
import {coffeePageSaga} from "./coffee/sagas/coffeePageSaga";
import {driversPageSaga} from "./dirvers/sagas/driversPageSaga";
import {paymentPageSaga} from "./payment/sagas/paymentPageSaga";
import {waitingHallPageSaga} from "./waitingHall/sagas/waitingHallPageSaga";

export default function* Saga() {
    yield all([
        latestNewsSaga(),
        singlePostSaga(),
        newsBlogSaga(),
        offersSaga(),
        singleOfferSaga(),
        contactsPageSaga(),
        vacanciesPageSaga(),
        frequentlyQPageSaga(),
        aboutUsPageSaga(),
        busServicePageSaga(),
        mediaServicePageSaga(),
        carParkPageSaga(),
        interFlightsPageSaga(),
        vipAutoPageSaga(),
        supportPageSaga(),
        coffeePageSaga(),
        driversPageSaga(),
        paymentPageSaga(),
        waitingHallPageSaga(),
    ]);
}
