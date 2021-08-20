import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import {NewsAction, newsStatusRequest, latestNewsFetcher} from "./actions";
import api from "../../../../api/services";


function* newsHandler(): Generator<any> {
    try {
        yield put(newsStatusRequest({status: RequestStatus.LOADING}));
        const fetchNews: any = yield call(api.latestNews.fetchLatestNews);
        if (fetchNews?.data) {
            yield put(newsStatusRequest({status: RequestStatus.SUCCEED}))
            yield put(latestNewsFetcher({latestNews: fetchNews.data}));
        }
    } catch {
        yield put(newsStatusRequest({status: RequestStatus.FAILED}))
    }
}

export function* newsSaga() {
    yield takeLatest(NewsAction.NEWS, newsHandler);
}