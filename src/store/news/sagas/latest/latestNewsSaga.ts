import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import {latestNewsRequestStatus, latestNewsFetcher, LatestNewsActions} from "./latestNewsActions";
import api from "../../../../api/services";


function* latestNewsHandler(): Generator<any> {
    try {
        yield put(latestNewsRequestStatus({status: RequestStatus.LOADING}));
        const fetchNews: any = yield call(api.latestNews.fetchLatestNews);
        if (fetchNews?.data) {
            yield put(latestNewsRequestStatus({status: RequestStatus.SUCCEED}))
            yield put(latestNewsFetcher({latestNews: fetchNews.data}));
        }
    } catch {
        yield put(latestNewsRequestStatus({status: RequestStatus.FAILED}))
    }
}

export function* latestNewsSaga() {
    yield takeLatest(LatestNewsActions.LATEST_NEWS, latestNewsHandler);
}