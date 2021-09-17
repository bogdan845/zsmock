import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchSupportPage = () => {
    return get(APP_URLS.pages.support)
}