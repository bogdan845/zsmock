import {availableDirections} from "../../index";
import {APP_URLS} from "../../constants/urls";

export const fetchTicketsDirections = () => {
    return availableDirections(APP_URLS.tickets.directions);
}