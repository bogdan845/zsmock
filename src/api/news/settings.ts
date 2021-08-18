import {get} from "../services"


enum FetchLatestNews {
    POSTS = "/latest_news"
}

export const fetchLatestNews = () => {
    return get(FetchLatestNews.POSTS);
}