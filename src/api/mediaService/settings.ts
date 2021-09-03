import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchMediaServicePage = () => {
    return get(APP_URLS.pages.aboutUs.mediaService);
}