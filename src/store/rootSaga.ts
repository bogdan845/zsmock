import {all} from "redux-saga/effects";
import {latestNewsSaga} from "./news/sagas/latest/latestNewsSaga";
import {singlePostSaga} from "./news/sagas/singlePost/singlePostSaga";
import {newsBlogSaga} from "./news/sagas/newsBlog/newsBlogSaga";
import {offersSaga} from "./specialOffers/sagas/offers/offersSaga";
import {singleOfferSaga} from "./specialOffers/sagas/singleOffer/singleOfferSaga";

export default function* Saga() {
    yield all([
        latestNewsSaga(),
        singlePostSaga(),
        newsBlogSaga(),
        offersSaga(),
        singleOfferSaga()
    ]);
}
