import {availableTickets} from "../../index";
import {APP_URLS} from "../../constants/urls";
import {IFormValues} from "../../../pages/Home/components/Tickets/Tickets";


export interface ITicketsRequest {
    payload: IFormValues;
}

export const fetchTickets = (payload: ITicketsRequest) => {
    return availableTickets(APP_URLS.tickets.available, payload);
}