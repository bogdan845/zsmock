import {put, call, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import api from "../../../../api/services";
import {
    ticketsDirectionRequestStatus,
    TicketsDirectionsActions,
    ticketsDirectionsFetcher
} from "./ticketsDirectionsActions";

function* ticketsDirectionsHandler(): Generator<{}> {
    try {
        yield put(ticketsDirectionRequestStatus({status: RequestStatus.LOADING}));
        const fetchTickets: any = yield call(api.tickets.directions);
        if (fetchTickets) {
            yield put(ticketsDirectionsFetcher({
                directions: {
                    status: RequestStatus.SUCCEED,
                    data: fetchTickets
                }
            }))
        }
    } catch {
        yield put(ticketsDirectionRequestStatus({status: RequestStatus.FAILED}));
    }
}


export function* ticketsDirectionSaga() {
    yield takeLatest(TicketsDirectionsActions.TICKETS_DIRECTION, ticketsDirectionsHandler)
}