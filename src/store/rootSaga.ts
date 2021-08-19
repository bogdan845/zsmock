import {all} from "redux-saga/effects";
import {newsSaga} from "./news/latest/sagas/saga";

export default function* Saga() {
    yield all([
        newsSaga()
    ]);
}
