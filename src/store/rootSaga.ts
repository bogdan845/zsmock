import {all} from "redux-saga/effects";
import {newsSaga} from "./news/latest/sagas/saga";
import {singlePostSaga} from "./singlePost/sagas/sagas";

export default function* Saga() {
    yield all([
        newsSaga(),
        singlePostSaga()
    ]);
}
