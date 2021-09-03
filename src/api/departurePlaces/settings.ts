import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchDeparturePlacesPage = () => {
    return get(APP_URLS.pages.departurePlaces);
}