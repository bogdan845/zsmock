import {all} from "redux-saga/effects";
import {latestNewsSaga} from "./news/sagas/latest/latestNewsSaga";
import {singlePostSaga} from "./news/sagas/singlePost/singlePostSaga";
import {newsSaga} from "./news/sagas/news/newsSaga";

export default function* Saga() {
    yield all([
        latestNewsSaga(),
        singlePostSaga(),
        newsSaga(),
    ]);
}
