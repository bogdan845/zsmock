import {call, put, takeLatest} from "redux-saga/effects";
import {blogNewsFetcher, blogNewsRequestStatus, NewsBlogActions} from "./newsBlogActions";
import api from "../../../../api/services";
import {RequestStatus} from "../../../request/requestStatus";

function* newsHandler(action: any): Generator<any> {
    try {
        yield  put(blogNewsRequestStatus({status: RequestStatus.LOADING}));
        const fetchNews: any = yield call(api.news.blog.fetchAllNews, action.payload);
        if (fetchNews.data) {
            yield put(blogNewsRequestStatus({status: RequestStatus.SUCCEED}));
            yield put(blogNewsFetcher({
                blog: {
                    status: RequestStatus.SUCCEED,
                    posts: fetchNews.data,
                    maxNumPages: Number(fetchNews.headers["x-wp-totalpages"])
                }
            }))
        }
    } catch (err) {
        yield put(blogNewsRequestStatus({status: RequestStatus.FAILED}))
    }
}

export function* newsBlogSaga() {
    yield takeLatest(NewsBlogActions.NEWS_BLOG, newsHandler);
}