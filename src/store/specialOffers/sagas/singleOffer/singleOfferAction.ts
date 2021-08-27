import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {ISingleOffer, ISpecialOffersState} from "../../offersReducer";

export enum SingleOfferActions {
    SINGLE_OFFER_REQUEST_STATUS = "SINGLE_OFFER_REQUEST_STATUS",
    FETCH_SINGLE_OFFER = "FETCH_SINGLE_OFFER",
    SINGLE_OFFER = "SINGLE_OFFER"
}

type SingleOfferStatus = Omit<ISingleOffer, "post">
type FetchSingleOffer = Omit<ISpecialOffersState, "offers">

export const singleOfferRequestStatus = createAction(
    SingleOfferActions.SINGLE_OFFER_REQUEST_STATUS,
    (payload: SingleOfferStatus) => payload
);

export const fetchSingleOffer = createAction(
    SingleOfferActions.FETCH_SINGLE_OFFER,
    (payload: FetchSingleOffer) => payload
);

export const singleOffer = createAction(
    SingleOfferActions.SINGLE_OFFER,
    (payload: string) => payload
);