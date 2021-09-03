import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchInterFlightsPage =() => {
    return get(APP_URLS.pages.interFlights)
}