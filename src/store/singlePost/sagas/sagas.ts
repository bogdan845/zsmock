import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {SinglePostAction, singlePostFetcher, singlePostRequestStatus} from "./actions";
import api from "../../../api/services";


function* singlePostHandler(action: any): Generator<any> {
    try {
        yield put(singlePostRequestStatus({status: RequestStatus.LOADING}));
        const fetchPost: any = yield call(api.singlePost.fetchSinglePost(action.payload))
        if (fetchPost?.data) {
            yield put(singlePostRequestStatus({status: RequestStatus.SUCCEED}))
            yield put(singlePostFetcher({post: fetchPost.data[0]}))
        }
    } catch (err) {
        yield put(singlePostRequestStatus({status: RequestStatus.FAILED}))
    }
}


export function* singlePostSaga() {
    yield takeLatest(SinglePostAction.SINGLE_POST, singlePostHandler);
}