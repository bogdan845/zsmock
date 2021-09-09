import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {TicketsActions, ticketsFetcher, ticketsRequestStatus} from "./ticketsActions";
import api from "../../../api/services";


export function* ticketsHandler(action: any): Generator<any> {
    try {
        yield put(ticketsRequestStatus({status: RequestStatus.LOADING}));
        const fetchTickets: any = yield call(api.searchTickets.tickets.fetchTickets, action.payload)
        if (fetchTickets.data) {
            yield put(ticketsFetcher({
                status: RequestStatus.SUCCEED,
                tickets: fetchTickets.data
            }))
        }
    } catch (err) {
        yield put(ticketsRequestStatus({status: RequestStatus.FAILED}))
    }
}

export function* ticketsSaga() {
    yield takeLatest(TicketsActions.TICKETS, ticketsHandler);
}