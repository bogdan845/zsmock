import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import {singlePostRequestStatus, singlePostFetcher, SinglePostActions} from "./singlePostActions";
import api from "../../../../api/services";

function* singlePostHandler(action: any): Generator<any> {
    try {
        yield put(singlePostRequestStatus({status: RequestStatus.LOADING}));
        const isPost: any = yield call(api.singlePost.fetchSinglePost, action.payload);
        if (isPost.data) {
            yield put(singlePostRequestStatus({status: RequestStatus.SUCCEED}));
            yield put(singlePostFetcher({singlePost: isPost.data[0]}))
        }
    } catch (err) {
        yield put(singlePostRequestStatus({status: RequestStatus.FAILED}));
    }
}


export function* singlePostSaga() {
    yield takeLatest(SinglePostActions.SINGLE_POST, singlePostHandler)
}