import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {
    FrequentlyQPageActions,
    frequentlyQPageFetcher,
    frequentlyQPageRequestStatus
} from "./frequentlyQPageActions";
import api from "../../../api/services";

function* contactsPageHandler(): Generator<{}> {
    try {
        yield put(frequentlyQPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.frequentlyQ);
        if (fetchPage.data) {
            yield put(frequentlyQPageFetcher({
                status: RequestStatus.SUCCEED,
                list: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(frequentlyQPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* frequentlyQPageSaga() {
    yield takeLatest(FrequentlyQPageActions.FREQUENTLY_Q_PAGE, contactsPageHandler);
}