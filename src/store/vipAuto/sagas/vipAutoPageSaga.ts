import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {VipAutoPageActions, vipAutoPageFetcher, vipAutoPageRequestStatus} from "./vipAutoPageActions";
import api from "../../../api/services";


function* vipAutoPageHandler(): Generator<{}> {
    try {
        yield put(vipAutoPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.vipAuto);
        if (fetchPage.data) {
            yield put(vipAutoPageFetcher({
                status: RequestStatus.SUCCEED,
                page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(vipAutoPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* vipAutoPageSaga() {
    yield takeLatest(VipAutoPageActions.VIP_AUTO_PAGE, vipAutoPageHandler);
}