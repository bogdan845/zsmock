import {getTickets} from "../../index";
import {APP_URLS} from "../../constants/urls";


export interface ITicketsRequest {
    from: string,
    to: string,
    date?: string
}

export const fetchTickets = (payload: any) => {
    return getTickets(APP_URLS.searchTickets.tickets, payload);
}