import {fetchLatestNews} from "../news/latest/settings";
import {fetchAllNews} from "../news/blog/settings";
import {fetchOffers} from "../specialOffers/offers/settings";
import {fetchSingleOffer} from "../specialOffers/singleOffer/settings";
import {fetchContactPage} from "../contacts/settings";
import {fetchDeparturePlacesPage} from "../departurePlaces/settings";
import {fetchBusServicePage} from "../busService/settings";
import {fetchMediaServicePage} from "../mediaService/settings";
import {fetchCarParkPage} from "../carPark/settings";
import {fetchInterFlightsPage} from "../interFlitghs/settings";
import {fetchSupportPage} from "../ourSupport/settings";
import {fetchVipAutoPage} from "../vipAuto/settings";
import {fetchDriversPage} from "../drivers/settings";
import {fetchCoffeePage} from "../coffee/settings";
import {fetchPaymentPage} from "../payment/settings";
import {fetchTickets} from "../tickets/availableTickets/settings";
import {fetchAboutUsPage} from "../aboutUs/settings";
import {fetchFrequentlyQ} from "../frequentlyQ/settings";
import {fetchSinglePost} from "../news/singlePost/settings";
import {fetchWaitingHallPage} from "../waitingHall/settings";
import {fetchVacanciesPage} from "../vacancies/settings";
import {fetchTicketsDirections} from "../tickets/directions/settings";


const api = {
    news: {
        latestNews: fetchLatestNews,
        singlePost: fetchSinglePost,
        blog: fetchAllNews,
    },
    specialOffers: {
        offers: fetchOffers,
        singleOffer: fetchSingleOffer
    },
    aboutUs: fetchAboutUsPage,
    busService: fetchBusServicePage,
    mediaService: fetchMediaServicePage,
    vacancies: fetchVacanciesPage,
    contacts: fetchContactPage,
    frequentlyQ: fetchFrequentlyQ,
    departurePlaces: fetchDeparturePlacesPage,
    carPark: fetchCarParkPage,
    interFlights: fetchInterFlightsPage,
    vipAuto: fetchVipAutoPage,
    support: fetchSupportPage,
    drivers: fetchDriversPage,
    payment: fetchPaymentPage,
    coffee: fetchCoffeePage,
    waitingHall: fetchWaitingHallPage,
    tickets: {
        available: fetchTickets,
        directions: fetchTicketsDirections
    },
}

export default api;