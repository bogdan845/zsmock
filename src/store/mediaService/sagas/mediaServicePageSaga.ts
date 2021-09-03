import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {MediaServicePageActions, mediaServicePageFetcher, mediaServicePageRequestStatus} from "./mediaServicePageActions";
import api from "../../../api/services";


function* mediaServicePageHandler(): Generator<any> {
    try {
        yield put(mediaServicePageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.mediaService.fetchMediaServicePage);
        if (fetchPage.data) {
            yield put(mediaServicePageFetcher({
                    status: RequestStatus.SUCCEED,
                    page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(mediaServicePageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* mediaServicePageSaga() {
    yield takeLatest(MediaServicePageActions.MEDIA_SERVICE_PAGE, mediaServicePageHandler);
}