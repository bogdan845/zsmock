import {get} from "../../index";
import {APP_URLS} from "../../constants/urls";


export const fetchLatestNews = () => {
    return get(APP_URLS.pages.news.requests.latest);
};