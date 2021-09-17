import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {CarParkPageActions, carParkPageFetcher, carParkPageRequestStatus} from "./carParkPageActions";
import api from "../../../api/services";

function* carParkPagePageHandler(): Generator<{}> {
    try {
        yield put(carParkPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.carPark);
        if (fetchPage.data) {
            yield put(carParkPageFetcher({
                status: RequestStatus.SUCCEED,
                page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(carParkPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* carParkPageSaga() {
    yield takeLatest(CarParkPageActions.CAR_PARK_PAGE, carParkPagePageHandler);
}