import {createAction} from "redux-actions";
import {INewsBlog, INewsState} from "../../newsReducer";
import {Omit} from "react-redux";

export enum NewsBlogActions {
    NEWS_BLOG_REQUEST_STATUS = "NEWS_BLOG_REQUEST_STATUS",
    FETCH_NEWS_BLOG = "FETCH_NEWS_BLOG",
    NEWS_BLOG = "NEWS_BLOG"
};

type NewsBlogRequestStatus = Omit<INewsBlog, "posts" | "maxPages">;
type FetchBlogNews = Omit<INewsState, "singlePost" | "latestNews">;

export const blogNewsRequestStatus = createAction(
    NewsBlogActions.NEWS_BLOG_REQUEST_STATUS,
    (payload: NewsBlogRequestStatus) => payload
);

export const blogNewsFetcher = createAction(
    NewsBlogActions.FETCH_NEWS_BLOG,
    (payload: FetchBlogNews) => payload
);

export const blogNews = createAction(
    NewsBlogActions.NEWS_BLOG,
    (payload: number) => payload
);