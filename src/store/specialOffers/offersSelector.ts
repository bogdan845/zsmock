import {IRootState} from "../rootReducer";

export const offersPostsSelector = (state: IRootState) => state.specialOffers.offers;
export const singleOfferSelector = (state: IRootState) => state.specialOffers.single;