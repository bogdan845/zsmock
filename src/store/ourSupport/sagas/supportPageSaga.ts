import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {SupportPageActions, supportPageFetcher, supportPageRequestStatus} from "./supportPageActions";
import api from "../../../api/services";


function* supportPageHandler(): Generator<{}> {
    try {
        yield put(supportPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.support);
        if (fetchPage.data) {
            yield put(supportPageFetcher({
                    status: RequestStatus.SUCCEED,
                    page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(supportPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* supportPageSaga() {
    yield takeLatest(SupportPageActions.SUPPORT_PAGE, supportPageHandler);
}