import {APP_URLS} from "../../../api/constants/urls";
import {InternationalFlights} from "../../../pages/InternationalFlights/InternationalFlights";
import {SpecialOffers} from "../../../pages/SpecialOffers/SpecialOffers";
import {Blog} from "../../../pages/Blog/Blog";
import {CarParkPage} from "../../../pages/CarPark/CarPark";
import {VipAutoRental} from "../../../pages/VipAutoRental/VipAutoRental";
import {IPageTitle} from "../../interfaces/pagesTitle/pagesTitle";
import {SinglePage} from "../../../pages/singlePage/SinglePage";

import {singlePost} from "../../../store/news/sagas/singlePost/singlePostActions";
import {singlePostSelector} from "../../../store/news/newsSelectors";
import {singleOffer} from "../../../store/specialOffers/sagas/singleOffer/singleOfferAction";
import {singleOfferSelector} from "../../../store/specialOffers/offersSelector";


interface IPageRoutes {
    url: string,
    label?: string,
    component: ({title}: IPageTitle) => JSX.Element
}

export const PAGE_ROUTES: IPageRoutes[] = [
    {
        url: APP_URLS.pages.news.routes.newsPage,
        label: "",
        component: Blog
    },
    {
        url: APP_URLS.pages.news.routes.pagination,
        label: "",
        component: Blog
    },
    {
        url: APP_URLS.pages.news.routes.single,
        label: "",
        component: () => SinglePage({pageAction: singlePost, selector: singlePostSelector})
    },
    {
        url: APP_URLS.pages.offers.routes.single,
        label: "",
        component: () => SinglePage({pageAction: singleOffer, selector: singleOfferSelector})
    },
    {
        url: APP_URLS.pages.offers.routes.offersPage,
        label: "Акціі та пропозиціїї",
        component: SpecialOffers
    },
    {
        url: APP_URLS.pages.carPark,
        label: "",
        component: CarParkPage,
    },
    {
        url: APP_URLS.pages.internationalFlights,
        label: "Міжнародні рейси",
        component: InternationalFlights
    },
    {
        url: APP_URLS.pages.vipAutoRental,
        label: "",
        component: VipAutoRental
    }
]