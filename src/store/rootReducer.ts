import {combineReducers} from "redux";
import {INewsState, newsReducer} from "./news/reducer";
import {ISinglePost, singlePostReducer} from "./singlePost/reducer";

export interface IRootState {
    news: INewsState;
    singlePost: ISinglePost
}

export const rootReducer = combineReducers({
    news: newsReducer,
    // singlePost: singlePostReducer,
})
