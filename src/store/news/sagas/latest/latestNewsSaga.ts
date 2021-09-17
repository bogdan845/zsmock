import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import {LatestNewsActions, latestNewsFetcher, latestNewsRequestStatus} from "./latestNewsActions";
import api from "../../../../api/services";


function* latestNewsHandler(): Generator<{}> {
    try {
        yield put(latestNewsRequestStatus({status: RequestStatus.LOADING}));
        const fetchLatestNews: any = yield call(api.news.latestNews);
        if (fetchLatestNews?.data) {
            yield put(latestNewsFetcher({
                latestNews: {
                    status: RequestStatus.SUCCEED,
                    posts: fetchLatestNews.data
                }
            }));
        }
    } catch {
        yield put(latestNewsRequestStatus({status: RequestStatus.FAILED}))
    }
}

export function* latestNewsSaga() {
    yield takeLatest(LatestNewsActions.LATEST_NEWS, latestNewsHandler);
}