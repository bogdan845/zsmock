import {get} from "../index";
import {APP_URLS} from "../constants/urls";

export const fetchWaitingHallPage = () => {
    return get(APP_URLS.pages.waitingHall);
}