import {call, put, takeLatest} from "redux-saga/effects"
import {singleOfferFetcher, SingleOfferActions, singleOfferRequestStatus} from "./singleOfferAction";
import {RequestStatus} from "../../../request/requestStatus";
import api from "../../../../api/services";
import {Action} from "redux-actions";
import {IFetchSingleOffer} from "../../../../api/specialOffers/singleOffer/settings";

function* singleOfferHandler(action: Action<IFetchSingleOffer>): Generator<{}> {
    try {
        yield put(singleOfferRequestStatus({status: RequestStatus.LOADING}));
        const fetchPost: any = yield call(api.specialOffers.singleOffer, action.payload);
        if (fetchPost.data) {
            yield put(singleOfferFetcher({
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