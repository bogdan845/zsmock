import {get} from "../../index";
import {APP_URLS} from "../../constants/urls";


export const fetchSingleOffer = (slug: string) => {
    return get(APP_URLS.pages.offers.requests.single + slug)
}