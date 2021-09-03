import {get} from "../index";
import {APP_URLS} from "../constants/urls";

export const fetchDriversPage = () => {
    return get(APP_URLS.pages.drivers);
}