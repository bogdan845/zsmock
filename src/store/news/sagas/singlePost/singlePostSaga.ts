import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import {SinglePostActions, singlePostFetcher, singlePostRequestStatus} from "./singlePostActions";
import {Action} from "redux-actions";
import api from "../../../../api/services";


function* singlePostHandler(action: Action<string>): Generator<{}> {
    try {
        yield put(singlePostRequestStatus({singlePost: {status: RequestStatus.LOADING}}));
        const fetchPost: any = yield call(api.news.singlePost, action.payload);
        if (fetchPost.data) {
            yield put(singlePostRequestStatus({singlePost: {status: RequestStatus.SUCCEED}}));
            yield put(singlePostFetcher({
                singlePost: {
                    status: RequestStatus.SUCCEED,
                    post: fetchPost.data[0]
                }
            }))
        }
    } catch (err) {
        yield put(singlePostRequestStatus({singlePost: {status: RequestStatus.FAILED}}));
    }
}


export function* singlePostSaga() {
    yield takeLatest(SinglePostActions.SINGLE_POST, singlePostHandler)
}