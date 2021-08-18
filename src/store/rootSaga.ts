import {all} from "redux-saga/effects";
import {newsSaga} from "./news/sagas/news";

export default function* Saga() {
    yield all([
        newsSaga()
    ]);
}
