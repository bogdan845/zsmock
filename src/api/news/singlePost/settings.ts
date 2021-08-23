import {get} from "../../index";
import {APP_URLS} from "../../constants/urls";

export const fetchSinglePost = (slug: string) => {
    return get(APP_URLS.news.single + slug);
}