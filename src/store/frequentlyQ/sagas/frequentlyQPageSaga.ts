import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {
    FrequentlyQPageActions,
    frequentlyQPageFetcher,
    frequentlyQPageRequestStatus
} from "./frequentlyQPageActions";
import api from "../../../api/services";

function* contactsPageHandler(): Generator<any> {
    try {
        yield put(frequentlyQPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.frequentlyQ.fetchFrequentlyQ);
        // console.log(fetchPage.data)
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