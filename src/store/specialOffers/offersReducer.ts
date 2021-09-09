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
    blog: IOffers
    single: ISingleOffer
}

const initialState = {
    blog: {
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
        return {
            ...state,
            blog: {
                status: payload.blog.status,
                posts: payload.blog.posts
            }
        }
    },
    [SingleOfferActions.FETCH_SINGLE_OFFER]: (state, {payload}) => {
        return {
            ...state,
            single: {
                status: payload.single.status,
                post: new SinglePostModel(payload.single.post)
            }
        }
    }
}, initialState);