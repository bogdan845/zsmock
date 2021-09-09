import latestNews from "../news/latest";
import singlePost from "../news/singlePost"
import blog from "../news/blog"
import offers from "../specialOffers/offers";
import singleOffer from "../specialOffers/singleOffer"
import vacancies from "../vacancies/";
import contacts from "../contacts";
import departurePlaces from "../departurePlaces";
import aboutUs from "../aboutUs";
import busService from "../busService";
import mediaService from "../mediaService";
import frequentlyQ from "../frequentlyQ";
import carPark from "../carPark"
import interFlights from "../interFlitghs";
import vipAuto from "../vipAuto";
import support from "../support";
import drivers from "../drivers";
import waitingHall from "../waitingHall";
import coffee from "../coffee";
import payment from "../payment";
import tickets from "../serchTickets/tickets";


const api = {
    news: {
        latestNews,
        singlePost,
        blog,
    },
    specialOffers: {
        offers,
        singleOffer
    },
    aboutUs,
    busService,
    mediaService,
    vacancies,
    contacts,
    frequentlyQ,
    departurePlaces,
    carPark,
    interFlights,
    vipAuto,
    support,
    drivers,
    payment,
    coffee,
    waitingHall,
    searchTickets: {
        tickets,
    },
}

export default api;