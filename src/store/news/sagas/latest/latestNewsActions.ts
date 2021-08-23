import {createAction} from "redux-actions";
import {INewsStateBlog} from "../../newsReducer";
import {Omit} from "react-redux";

export enum LatestNewsActions {
    LATEST_NEWS_REQUEST_STATUS = "LATEST_NEWS_REQUEST_STATUS",
    FETCH_LATEST_NEWS = "FETCH_LATEST_NEWS",
    LATEST_NEWS = "LATEST_NEWS"
}


type LatestNewsStatus = Omit<INewsStateBlog, "news" | "latestNews" | "singlePost">;
type LatestNewsFetcher = Omit<INewsStateBlog, "news" | "status" | "singlePost">;


export const latestNewsRequestStatus = createAction(
    LatestNewsActions.LATEST_NEWS_REQUEST_STATUS,
    (payload: LatestNewsStatus) => payload
)

export const latestNewsFetcher = createAction(
    LatestNewsActions.FETCH_LATEST_NEWS,
    (payload: LatestNewsFetcher) => payload
)


export const latestNews = createAction(
    LatestNewsActions.LATEST_NEWS
)


