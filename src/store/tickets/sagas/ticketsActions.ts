import {ITicketsState} from "../ticketsReducer";
import {createAction} from "redux-actions";
import {Omit} from "react-redux";


type TicketsRequestStatus = Omit<ITicketsState, "tickets">

export enum TicketsActions {
    TICKETS_REQUEST_STATUS = "TICKETS_REQUEST_STATUS",
    FETCH_TICKETS = "FETCH_TICKETS",
    TICKETS = "TICKETS"
}

export const ticketsRequestStatus = createAction(
    TicketsActions.TICKETS_REQUEST_STATUS,
    (payload: TicketsRequestStatus) => payload
);

export const ticketsFetcher = createAction(
    TicketsActions.FETCH_TICKETS,
    (payload: ITicketsState) => payload
);

export const tickets = createAction(
    TicketsActions.TICKETS,
    (payload: any) => payload
);