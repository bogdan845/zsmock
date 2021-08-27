import {createAction} from "redux-actions";
import {ILatestNews, INewsState} from "../../newsReducer";
import {Omit} from "react-redux";

export enum LatestNewsActions {
    LATEST_NEWS_REQUEST_STATUS = "LATEST_NEWS_REQUEST_STATUS",
    FETCH_LATEST_NEWS = "FETCH_LATEST_NEWS",
    LATEST_NEWS = "LATEST_NEWS"
}

type LatestNewsStatus = Omit<ILatestNews, "posts">
type FetchLatestNews = Omit<INewsState, "singlePost" | "blog">


export const latestNewsRequestStatus = createAction(
    LatestNewsActions.LATEST_NEWS_REQUEST_STATUS,
    (payload: LatestNewsStatus) => payload
);

export const latestNewsFetcher = createAction(
    LatestNewsActions.FETCH_LATEST_NEWS,
    (payload: FetchLatestNews) => payload
);

export const latestNews = createAction(
    LatestNewsActions.LATEST_NEWS
);


