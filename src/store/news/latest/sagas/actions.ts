import {createAction} from "redux-actions";
import {INewsState} from "../../reducer";
import {PostPreviewModel} from "../../../../utils/models/Post/Preview";

export enum NewsAction {
    REQUEST_STATUS = "REQUEST_STATUS",
    FETCH_LATEST_NEWS = "FETCH_LATEST_NEWS",
    FETCH_NEWS = "FETCH_NEWS",
    SINGLE_POST = "SINGLE_POST",
    NEWS = "NEWS"
}

type LatestNewsStatus = Omit<INewsState, "latestNews" | "news" | "singlePost">;
type LatestNews = Omit<INewsState, "status" | "news" | "singlePost">;
type SinglePost = Omit<INewsState, "status" | "news" | "latestNews">;
type News = Omit<INewsState, "status" | "latestNews" | "singlePost">;

export const newsStatusRequest = createAction(
    NewsAction.REQUEST_STATUS,
    (payload: LatestNewsStatus) => payload
);

export const latestNewsFetcher = createAction(
    NewsAction.FETCH_LATEST_NEWS,
    (payload: LatestNews) => payload
);

export const singlePost = createAction(
    NewsAction.SINGLE_POST,
    (payload: SinglePost) => payload
);

export const newsFetcher = createAction(
    NewsAction.FETCH_NEWS,
    // (payload: News) => payload
);

export const news = createAction(
    NewsAction.NEWS
);