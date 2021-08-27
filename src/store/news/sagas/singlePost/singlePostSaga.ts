import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import {SinglePostActions, singlePostFetcher, singlePostRequestStatus} from "./singlePostActions";
import api from "../../../../api/services";

function* singlePostHandler(action: any): Generator<any> {
    try {
        yield put(singlePostRequestStatus({status: RequestStatus.LOADING}));
        const fetchPost: any = yield call(api.news.singlePost.fetchSinglePost, action.payload);
        if (fetchPost.data) {
            yield put(singlePostRequestStatus({status: RequestStatus.SUCCEED}));
            yield put(singlePostFetcher({
                singlePost: {
                    status: RequestStatus.SUCCEED,
                    post: fetchPost.data[0]
                }
            }))
        }
    } catch (err) {
        yield put(singlePostRequestStatus({status: RequestStatus.FAILED}));
    }
}


export function* singlePostSaga() {
    yield takeLatest(SinglePostActions.SINGLE_POST, singlePostHandler)
}