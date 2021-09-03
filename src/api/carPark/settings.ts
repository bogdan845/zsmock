import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchCarParkPage = () => {
    return get(APP_URLS.pages.carPark);
}