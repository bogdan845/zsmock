import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../../request/requestStatus";
import {offersFetcher, OffersActions, offersRequestStatus} from "./offersActions";
import api from "../../../../api/services";

function* specialOffersHandler(): Generator<any> {
    try {
        yield put(offersRequestStatus({status: RequestStatus.LOADING}));
        const fetchPosts: any = yield call(api.specialOffers.offers.fetchOffers);
        if (fetchPosts.data) {
            yield put(offersFetcher({
                blog: {
                    status: RequestStatus.SUCCEED,
                    posts: fetchPosts.data
                }
            }));
        }
    } catch (err) {
        yield put(offersRequestStatus({status: RequestStatus.FAILED}))
    }
}


export function* offersSaga() {
    yield takeLatest(OffersActions.OFFERS, specialOffersHandler)
}