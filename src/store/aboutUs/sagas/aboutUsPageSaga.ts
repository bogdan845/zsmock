import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {AboutUsPageActions, aboutUsPageFetcher, aboutUsPageRequestStatus} from "./aboutUsPageActions";
import api from "../../../api/services";

function* aboutUsPageHandler(): Generator<any> {
    try {
        yield put(aboutUsPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.aboutUs.fetchAboutUsPage);
        if (fetchPage.data) {
            yield put(aboutUsPageFetcher({
                    status: RequestStatus.SUCCEED,
                    page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(aboutUsPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* aboutUsPageSaga() {
    yield takeLatest(AboutUsPageActions.ABOUT_US_PAGE, aboutUsPageHandler);
}