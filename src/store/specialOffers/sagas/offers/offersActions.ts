import {createAction} from "redux-actions";
import {IOffers, ISpecialOffersState} from "../../offersReducer";
import {Omit} from "react-redux";

type OffersPostsStatus = Omit<IOffers, "posts">
type FetchOffersPosts = Omit<ISpecialOffersState, "single">

export enum OffersActions {
    OFFERS_REQUEST_STATUS = "OFFERS_REQUEST_STATUS",
    FETCH_OFFERS = "FETCH_OFFERS",
    OFFERS = "OFFERS"
};

export const offersRequestStatus = createAction(
    OffersActions.OFFERS_REQUEST_STATUS,
    (payload: OffersPostsStatus) => payload
);

export const offersFetcher = createAction(
    OffersActions.FETCH_OFFERS,
    (payload: FetchOffersPosts) => payload
);

export const offers = createAction(
    OffersActions.OFFERS
);