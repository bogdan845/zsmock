import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import {
    AvailableTicketsActions,
    availableTicketsFetcher,
    availableTicketsRequestStatus
} from "./availableTicketsActions";
import api from "../../../../api/services";
import {Action} from "redux-actions";
import {ITicketsRequest} from "../../../../api/tickets/availableTickets/settings";

export function* ticketsHandler(action: Action<ITicketsRequest>): Generator<{}> {
    try {
        yield put(availableTicketsRequestStatus({available: {status: RequestStatus.LOADING}}));
        const fetchTickets: any = yield call(api.tickets.available, action.payload)
        if (fetchTickets.data) {
            yield put(availableTicketsFetcher({
                available: {
                    status: RequestStatus.SUCCEED,
                    tickets: fetchTickets.data.data
                }
            }))
        }
    } catch (err) {
        yield put(availableTicketsRequestStatus({available: {status: RequestStatus.FAILED}}))
    }
}

export function* availableTicketsSaga() {
    yield takeLatest(AvailableTicketsActions.AVAILABLE_TICKETS, ticketsHandler);
}