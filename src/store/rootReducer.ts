import {combineReducers} from "redux";
import {INewsState, latestNewsReducer} from "./news/reducer";

export interface IRootState {
    latestNews: INewsState;
}


export const rootReducer = combineReducers({
    latestNews: latestNewsReducer,
})
