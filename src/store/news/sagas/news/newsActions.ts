import {createAction} from "redux-actions";
import {INewsStateBlog} from "../../newsReducer";
import {Omit} from "react-redux";


export enum NewsActions {
    NEWS_REQUEST_STATUS = "NEWS_REQUEST_STATUS",
    FETCH_NEWS = "FETCH_NEWS",
    NEWS = "NEWS"
}

type NewsRequestStatus = Omit<INewsStateBlog, "latestNews" | "singlePost" | "news">;
type NewsFetcher = Omit<INewsStateBlog, "status" | "singlePost" | "latestNews">;

export const newsRequestStatus = createAction(
    NewsActions.NEWS_REQUEST_STATUS,
    (payload: NewsRequestStatus) => payload
);

export const newsFetcher = createAction(
    NewsActions.FETCH_NEWS,
    (payload: NewsFetcher) => payload
)


export const news = createAction(
    NewsActions.NEWS,
    (payload: number) => payload
)
