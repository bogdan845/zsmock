import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {PaymentPageActions, paymentPageFetcher, paymentPageRequestStatus} from "./paymentPageActions";
import api from "../../../api/services";

function* paymentPagePageHandler(): Generator<any> {
    try {
        yield put(paymentPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.payment.fetchPaymentPage);
        if (fetchPage.data) {
            yield put(paymentPageFetcher({
                status: RequestStatus.SUCCEED,
                page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(paymentPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* paymentPageSaga() {
    yield takeLatest(PaymentPageActions.PAYMENT_PAGE, paymentPagePageHandler);
}