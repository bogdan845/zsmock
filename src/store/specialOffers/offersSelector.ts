import {IRootState} from "../rootReducer";

export const offersPostsSelector = (state: IRootState) => state.specialOffers.blog;
export const singleOfferSelector = (state: IRootState) => state.specialOffers.single;