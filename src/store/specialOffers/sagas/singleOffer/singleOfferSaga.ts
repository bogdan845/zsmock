import {call, put, takeLatest} from "redux-saga/effects"
import {fetchSingleOffer, SingleOfferActions, singleOfferRequestStatus} from "./singleOfferAction";
import {RequestStatus} from "../../../request/requestStatus";
import api from "../../../../api/services";

function* singleOfferHandler(action: any): Generator<any> {
    try {
        yield put(singleOfferRequestStatus({status: RequestStatus.LOADING}));
        const fetchPost: any = yield call(api.specialOffers.singleOffer.fetchSingleOffer, action.payload);
        if (fetchPost.data) {
            yield put(fetchSingleOffer({
                single: {
                    status: RequestStatus.SUCCEED,
                    post: fetchPost.data[0]
                }
            }))
        }
    } catch (err) {
        yield put(singleOfferRequestStatus({status: RequestStatus.FAILED}));
    }
}


export function* singleOfferSaga() {
    yield takeLatest(SingleOfferActions.SINGLE_OFFER, singleOfferHandler);
}