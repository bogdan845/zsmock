import {call, put, takeLatest} from "redux-saga/effects";
import {newsRequestStatus, newsFetcher, NewsActions} from "./newsActions";
import api from "../../../../api/services";
import {RequestStatus} from "../../../request/requestStatus";

function* newsHandler(action: any): Generator<any> {
    try {
        yield  put(newsRequestStatus({status: RequestStatus.LOADING}));
        const isNews: any = yield call(api.allNews.fetchAllNews, action.payload);
        if (isNews.data) {
            yield put(newsRequestStatus({status: RequestStatus.SUCCEED}));
            yield put(newsFetcher({
                news: {
                    posts: isNews.data,
                    maxNumPages: Number(isNews.headers["x-wp-totalpages"])
                }
            }))
        }
    } catch (err) {
        yield put(newsRequestStatus({status: RequestStatus.FAILED}))
    }
}

export function* newsSaga() {
    yield takeLatest(NewsActions.NEWS, newsHandler);
}