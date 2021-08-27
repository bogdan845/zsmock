import {combineReducers} from "redux";
import {INewsState, newsReducer} from "./news/newsReducer";
import {ISpecialOffersState, offersReducer} from "./specialOffers/offersReducer";

export interface IRootState {
    news: INewsState;
    specialOffers: ISpecialOffersState
};

export const rootReducer = combineReducers({
    news: newsReducer,
    specialOffers: offersReducer
});