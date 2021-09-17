import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {BusServicePageActions, busServicePageFetcher, busServicePageRequestStatus} from "./busServicePageActions";
import api from "../../../api/services";

function* busServicePageHandler(): Generator<{}> {
    try {
        yield put(busServicePageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.busService);
        if (fetchPage.data) {
            yield put(busServicePageFetcher({
                    status: RequestStatus.SUCCEED,
                    page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(busServicePageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* busServicePageSaga() {
    yield takeLatest(BusServicePageActions.BUS_SERVICE_PAGE, busServicePageHandler);
}