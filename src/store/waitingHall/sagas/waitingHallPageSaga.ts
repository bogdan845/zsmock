import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {WaitingHallPageActions, waitingHallPageFetcher, waitingHallPageRequestStatus} from "./waitingHallPageActions";
import api from "../../../api/services";


function* waitingHallPageHandler(): Generator<{}> {
    try {
        yield put(waitingHallPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.waitingHall);
        if (fetchPage.data) {
            yield put(waitingHallPageFetcher({
                status: RequestStatus.SUCCEED,
                page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(waitingHallPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* waitingHallPageSaga() {
    yield takeLatest(WaitingHallPageActions.WAITING_HALL_PAGE, waitingHallPageHandler);
}