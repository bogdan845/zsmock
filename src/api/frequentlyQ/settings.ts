import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchFrequentlyQ = () => {
    return get(APP_URLS.pages.frequentlyQ);
}
