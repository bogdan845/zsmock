import {InterFlights} from "../../../../pages/InterlFlights/InterFlights";
import {SpecialOffers} from "../../../../pages/SpecialOffers/SpecialOffers";
import {Blog} from "../../../../pages/Blog/Blog";
import {CarPark} from "../../../../pages/CarPark/CarPark";
import {VipAuto} from "../../../../pages/VipAuto/VipAuto";
import {IPageTitle} from "../../../interfaces/pagesTitle/pagesTitle";
import {SinglePost} from "../../../../components/Repeatable/SinglePost/SinglePost";
import {singlePost} from "../../../../store/news/sagas/singlePost/singlePostActions";
import {singlePostSelector} from "../../../../store/news/newsSelectors";
import {singleOffer} from "../../../../store/specialOffers/sagas/singleOffer/singleOfferAction";
import {singleOfferSelector} from "../../../../store/specialOffers/offersSelector";
import {OurSupport} from "../../../../pages/OurSupport/OurSupport";
import {Coffee} from "../../../../pages/Coffee/Coffee";
import {Drivers} from "../../../../pages/Drivers/Drivers";
import {Payment} from "../../../../pages/Payment/Payment";
import {WaitingHall} from "../../../../pages/WaitingHall/WaitingHall";


export const PAGES_URL = {
    personalAcc: "/acc",
    home: "/",
    forumQuestions: "/forum_and_questions",
    departurePlaces: "/departure-place",
    vacancies: "/vacancies",
    contacts: "/contacts",
    offers: {
        offersPage: "/special_offers",
        single: "/special_offers/:slug",
    },
    carPark: "/car_park",
    internationalFlights: "/international_flights",
    vipAutoRental: "/vip_auto_rental",
    news: {
        newsPage: "/blog",
        single: "/blog/:slug",
        pagination: "/blog/page/:page",
    },
    benefits: "/benefits",
    support: "/ourSupport",
    coffee: "/coffee",
    drivers: "/experienced_drivers",
    payment: "/safe_payment",
    waitingHall: "/waiting_hall"
}

interface IPageRoutes {
    url: string,
    label?: string,
    component: ({title}: IPageTitle) => JSX.Element
}


export const PAGE_ROUTES: IPageRoutes[] = [
    {
        url: PAGES_URL.news.newsPage,
        label: "",
        component: Blog
    },
    {
        url: PAGES_URL.news.pagination,
        label: "Новини",
        component: Blog
    },
    {
        url: PAGES_URL.news.single,
        label: "",
        component: () => SinglePost({pageAction: singlePost, selector: singlePostSelector})
    },
    {
        url: PAGES_URL.offers.single,
        label: "",
        component: () => SinglePost({pageAction: singleOffer, selector: singleOfferSelector})
    },
    {
        url: PAGES_URL.offers.offersPage,
        label: "Акціі та пропозиціїї",
        component: SpecialOffers
    },
    {
        url: PAGES_URL.carPark,
        label: "",
        component: CarPark,
    },
    {
        url: PAGES_URL.internationalFlights,
        label: "Міжнародні рейси",
        component: InterFlights
    },
    {
        url: PAGES_URL.vipAutoRental,
        label: "",
        component: VipAuto
    },
    {
        url: PAGES_URL.support,
        label: "",
        component: OurSupport
    },
    {
        url: PAGES_URL.coffee,
        label: "",
        component: Coffee
    },
    {
        url: PAGES_URL.drivers,
        label: "",
        component: Drivers
    },
    {
        url: PAGES_URL.waitingHall,
        label: "",
        component: WaitingHall,
    },
    {
        url: PAGES_URL.payment,
        label: "",
        component: Payment,
    },
]