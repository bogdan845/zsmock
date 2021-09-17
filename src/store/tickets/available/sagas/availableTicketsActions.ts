import {IAvailableTickets, ITicketsState} from "../../ticketsReducer";
import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IFormValues} from "../../../../pages/Home/components/Tickets/Tickets";


type TicketsRequestStatus = Omit<IAvailableTickets, "tickets">
type AvailableTickets = Omit<ITicketsState, "directions">

export enum AvailableTicketsActions {
    AVAILABLE_TICKETS_REQUEST_STATUS = "AVAILABLE_TICKETS_REQUEST_STATUS",
    FETCH_AVAILABLE_TICKETS = "FETCH_AVAILABLE_TICKETS",
    AVAILABLE_TICKETS = "AVAILABLE_TICKETS"
}

export const availableTicketsRequestStatus = createAction(
    AvailableTicketsActions.AVAILABLE_TICKETS_REQUEST_STATUS,
    (payload: TicketsRequestStatus) => payload
);

export const availableTicketsFetcher = createAction(
    AvailableTicketsActions.FETCH_AVAILABLE_TICKETS,
    (payload: AvailableTickets) => payload
);

export const availableTickets = createAction(
    AvailableTicketsActions.AVAILABLE_TICKETS,
    (payload: IFormValues) => payload
);