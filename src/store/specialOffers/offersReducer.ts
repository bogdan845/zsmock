import {handleActions} from "redux-actions";
import {RequestStatus, RequestType} from "../request/requestStatus";
import {OffersActions} from "./sagas/offers/offersActions";
import {SingleOfferActions} from "./sagas/singleOffer/singleOfferAction";
import {SinglePostModel} from "../../utils/models/Post/SingleView";


export interface IOffers {
    status: RequestType,
    posts: []
}

export interface ISingleOffer {
    status: RequestType,
    post: {}
}

export interface ISpecialOffersState {
    offers: IOffers
    single: ISingleOffer
}

const initialState = {
    offers: {
        status: RequestStatus.IDLE,
        posts: []
    },
    single: {
        status: RequestStatus.IDLE,
        post: {}
    }
};


export const offersReducer = handleActions({
    [OffersActions.FETCH_OFFERS]: (state, {payload}) => {
        // console.log("special offers fetching", payload)
        return {
            ...state,
            offers: {
                status: payload.offers.status,
                posts: payload.offers.posts
            }
        }
    },
    [SingleOfferActions.FETCH_SINGLE_OFFER]: (state, {payload}) => {
        // console.log("single offer action", payload);
        return {
            ...state,
            single: {
                status: payload.single.status,
                post: new SinglePostModel(payload.single.post)
            }
        }
    }
}, initialState);