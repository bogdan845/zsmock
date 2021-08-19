import {createAction} from "redux-actions";
import {INewsState} from "../../reducer";

export enum NewsAction {
    LATEST_NEWS_REQUEST_STATUS = "LATEST_NEWS_REQUEST_STATUS",
    LATEST_NEWS_POSTS = "LATEST_NEWS_POSTS",
    LATEST_NEWS = "LATEST_NEWS"
}

type LatestNewsStatus = Omit<INewsState, "posts">
type LatestNewsPosts = Omit<INewsState, "status">

export const latestNewsStatusRequest = createAction(
    NewsAction.LATEST_NEWS_REQUEST_STATUS,
    (payload: LatestNewsStatus) => payload
);

export const latestNewsPosts = createAction(
    NewsAction.LATEST_NEWS_POSTS,
    (payload: LatestNewsPosts) => payload
)

export const fetchNews = createAction(
    NewsAction.LATEST_NEWS
)
