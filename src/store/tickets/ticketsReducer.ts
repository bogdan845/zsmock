import {handleActions} from "redux-actions";
import {RequestStatus, RequestType} from "../request/requestStatus";
import {TicketsActions} from "./sagas/ticketsActions";

export interface ITicketsState {
    status: RequestType,
    tickets: [],
}

const initialState = {
    status: RequestStatus.IDLE,
    tickets: [],
}
export const ticketsReducer = handleActions({
    [TicketsActions.FETCH_TICKETS]: (state, {payload}) => {
        console.log("tickets", payload)
        return ({
            ...state,
            status: payload.status,
            tickets: payload.tickets
        })
    }
}, initialState)