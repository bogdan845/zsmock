import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchVipAutoPage = () => {
    return get(APP_URLS.pages.vipAutoRental)
}