import {combineReducers} from "redux";
import {INewsStateBlog, newsReducer} from "./news/newsReducer";

export interface IRootState {
    news: INewsStateBlog;
}

export const rootReducer = combineReducers({
    news: newsReducer,
})
