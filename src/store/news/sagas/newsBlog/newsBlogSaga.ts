import {call, put, takeLatest} from "redux-saga/effects";
import {blogNewsFetcher, blogNewsRequestStatus, NewsBlogActions} from "./newsBlogActions";
import api from "../../../../api/services";
import {RequestStatus} from "../../../request/requestStatus";
import {Action} from "redux-actions";


function* newsHandler(action: Action<number>): Generator<{}> {
    try {
        yield  put(blogNewsRequestStatus({blog: {status: RequestStatus.LOADING}}));
        const fetchNews: any = yield call(api.news.blog, action.payload);
        if (fetchNews.data) {
            yield put(blogNewsFetcher({
                blog: {
                    status: RequestStatus.SUCCEED,
                    posts: fetchNews.data,
                    maxPages: Number(fetchNews.headers["x-wp-totalpages"])
                }
            }))
        }
    } catch (err) {
        yield put(blogNewsRequestStatus({blog: {status: RequestStatus.FAILED}}))
    }
}

export function* newsBlogSaga() {
    yield takeLatest(NewsBlogActions.NEWS_BLOG, newsHandler);
}