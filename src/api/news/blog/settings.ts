import {get} from "../../index";
import {APP_URLS} from "../../constants/urls";


export const fetchAllNews = (page: number) => {
    return get(APP_URLS.pages.news.blog + page);
};