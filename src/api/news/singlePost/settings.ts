import {get} from "../../index";
import {APP_URLS} from "../../constants/urls";

import {ILatestNewsSingle} from "../../../store/news/newsReducer";

export interface IFetchSinglePost {
    slug: string;
    payload: ILatestNewsSingle
}

export const fetchSinglePost = ({slug, payload}: IFetchSinglePost) => {
    return get(APP_URLS.pages.news.single + slug, payload);
}