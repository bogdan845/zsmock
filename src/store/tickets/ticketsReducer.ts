import {handleActions} from "redux-actions";
import {RequestStatus, RequestType} from "../request/requestStatus";
import {AvailableTicketsActions} from "./available/sagas/availableTicketsActions";
import {TicketsDirectionsActions} from "./directions/sagas/ticketsDirectionsActions";


export interface IAvailableTickets {
    status: RequestType,
    tickets: [],
}

export interface ITicketsDirections {
    status: RequestType,
    data: []
}

export interface ITicketsState {
    available: IAvailableTickets,
    directions: ITicketsDirections
}

const initialState = {
    available: {
        status: RequestStatus.IDLE,
        tickets: [],
    },
    directions: {
        status: RequestStatus.IDLE,
        data: [],
    }
}


export const ticketsReducer = handleActions({
    [AvailableTicketsActions.AVAILABLE_TICKETS_REQUEST_STATUS]: (state, {payload}) => {
        return ({
            ...state,
            available: {
                status: payload.available.status,
                tickets: []
            }
        })
    },

    [AvailableTicketsActions.FETCH_AVAILABLE_TICKETS]: (state, {payload}) => {
        return ({
            ...state,
            available: {
                status: payload.available.status,
                tickets: payload.available.tickets
            }
        })
    },

    [TicketsDirectionsActions.FETCH_TICKETS_DIRECTIONS]: (state, {payload}) => {
        return ({
            ...state,
            directions: {
                status: payload.directions.status,
                data: payload.directions.data
            }
        })
    }
}, initialState)