import {get} from "../index";

export enum FetchNews {
    POSTS = "/latest_news"
}

export const fetchLatestNews = () => {
    return get(FetchNews.POSTS);
}