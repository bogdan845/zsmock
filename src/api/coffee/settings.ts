import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchCoffeePage = () => {
    return get(APP_URLS.pages.coffee);
}