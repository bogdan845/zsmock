import {get} from "../../index";
import {APP_URLS} from "../../constants/urls";
import {ISingleOffer} from "../../../store/specialOffers/offersReducer";


export interface IFetchSingleOffer {
    slug: string
    payload: ISingleOffer
}

export const fetchSingleOffer = ({slug, payload}: IFetchSingleOffer) => {
    return get(APP_URLS.pages.offers.single + slug, payload)
}