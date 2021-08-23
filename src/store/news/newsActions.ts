import {createAction} from "redux-actions";
import {INewsStateBlog} from "./newsReducer";

export enum NewsRequestAction {
    NEWS_REQUEST_STATUS = "NEWS_REQUEST_STATUS",

}
type RequestStatus = Omit<INewsStateBlog, "latestNews" | "news" | "singlePost">;

export const newsRequestStatus = createAction(
    NewsRequestAction.NEWS_REQUEST_STATUS,
    (payload: RequestStatus) => payload
);