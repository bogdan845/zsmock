import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import {NewsAction, latestNewsStatusRequest, latestNewsPosts} from "./actions";
import api from "../../../../api/services";


function* newsHandler(): Generator<any> {
    try {
        yield put(latestNewsStatusRequest({status: RequestStatus.LOADING}));
        const fetchNews: any = yield call(api.latestNews.fetchLatestNews);
        if (fetchNews?.data) {
            yield put(latestNewsStatusRequest({status: RequestStatus.SUCCEED}))
            yield put(latestNewsPosts({posts: fetchNews.data}));
            yield put(latestNewsPosts({posts: fetchNews.data}));
            yield put(latestNewsPosts({posts: fetchNews.data}));
            yield put(latestNewsPosts({posts: fetchNews.data}));
            yield put(latestNewsPosts({posts: fetchNews.data}));
            yield put(latestNewsPosts({posts: fetchNews.data}));
        }
    } catch {
        yield put(latestNewsStatusRequest({status: RequestStatus.FAILED}))
    }
}

export function* newsSaga() {
    yield takeLatest(NewsAction.LATEST_NEWS, newsHandler);
}