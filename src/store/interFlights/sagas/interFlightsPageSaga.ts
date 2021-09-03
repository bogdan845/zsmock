import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {InterFlitghsPageActions, interFlightsPageFetcher, interFlightsPageRequestStatus} from "./interFlitghsPageActions";
import api from "../../../api/services";


function* mediaServicePageHandler(): Generator<any> {
    try {
        yield put(interFlightsPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.interFlights.fetchInterFlightsPage);
        if (fetchPage.data) {
            yield put(interFlightsPageFetcher({
                    status: RequestStatus.SUCCEED,
                    page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(interFlightsPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* interFlightsPageSaga() {
    yield takeLatest(InterFlitghsPageActions.MEDIA_SERVICE_PAGE, mediaServicePageHandler);
}