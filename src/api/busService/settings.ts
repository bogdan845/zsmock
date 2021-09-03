import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchBusServicePage = () => {
    return get(APP_URLS.pages.aboutUs.busService);
}