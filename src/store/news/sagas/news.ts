import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {fetchNews, NewsAction, newsStatusRequest} from "./actions";
import api from "../../../api/services";
import {newsReducer} from "../reducer";


function* newsHandler(): Generator<any> {
    try {
        yield put(newsStatusRequest({
            status: RequestStatus.LOADING,
            posts: []
        }))
        const fetchNews: any = yield call(api.latestNews.fetchLatestNews);
        if (fetchNews?.data) {
            yield put(newsStatusRequest({
                status: RequestStatus.SUCCEED,
                posts: fetchNews.data
            }))
        }
    } catch {
        yield put(newsStatusRequest({
            status: RequestStatus.FAILED,
            posts: []
        }))
    }
}

export function* newsSaga() {
    yield takeLatest(NewsAction.FETCH, newsHandler);
}