import {get} from "../../index";
import {APP_URLS} from "../../constants/urls";


export const fetchOffers = () => {
    return get(APP_URLS.pages.offers.requests.offers);
}