import {get} from "../../index";
import {APP_URLS} from "../../constants/urls";
import {INewsBlog} from "../../../store/news/newsReducer";

export interface IFetchAllNews {
    page: number
    payload: INewsBlog
}

export const fetchAllNews = ({page, payload}: IFetchAllNews) => {
    return get(APP_URLS.pages.news.blog + page, payload);
}