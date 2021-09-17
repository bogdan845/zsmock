import {createAction} from "redux-actions";
import {ITicketsDirections, ITicketsState} from "../../ticketsReducer";


export enum TicketsDirectionsActions {
    TICKETS_DIRECTIONS_REQUEST_STATUS = "TICKETS_DIRECTION_REQUEST_STATUS",
    FETCH_TICKETS_DIRECTIONS = "FETCH_TICKETS_DIRECTIONS",
    TICKETS_DIRECTION = "TICKETS_DIRECTION"
}

type TicketsDirectionsStatus = Omit<ITicketsDirections, "data">
type TicketsDirections = Omit<ITicketsState, "available">

export const ticketsDirectionRequestStatus = createAction(
    TicketsDirectionsActions.TICKETS_DIRECTIONS_REQUEST_STATUS,
    (payload: TicketsDirectionsStatus) => payload
);

export const ticketsDirectionsFetcher = createAction(
    TicketsDirectionsActions.FETCH_TICKETS_DIRECTIONS,
    (payload: TicketsDirections) => payload
);

export const ticketsDirection = createAction(
    TicketsDirectionsActions.TICKETS_DIRECTION
);