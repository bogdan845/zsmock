import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchAboutUsPage = () => {
    return get(APP_URLS.pages.aboutUs.main);
}