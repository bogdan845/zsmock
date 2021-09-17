import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {DriversPageActions, driversPageFetcher, driversPageRequestStatus} from "./driversPageActions";
import api from "../../../api/services";

function* carParkPagePageHandler(): Generator<{}> {
    try {
        yield put(driversPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.drivers);
        if (fetchPage.data) {
            yield put(driversPageFetcher({
                status: RequestStatus.SUCCEED,
                page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(driversPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* driversPageSaga() {
    yield takeLatest(DriversPageActions.DRIVERS_PAGE, carParkPagePageHandler);
}