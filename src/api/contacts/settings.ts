import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchContactPage = () => {
    return get(APP_URLS.pages.contacts);
}