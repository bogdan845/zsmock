import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum AboutUsPageActions {
    ABOUT_US_REQUEST_STATUS = "ABOUT_US_REQUEST_STATUS",
    ABOUT_US_FETCH_PAGE = "ABOUT_US_FETCH_PAGE",
    ABOUT_US_PAGE = "ABOUT_US_PAGE"
}

type AboutUsStatus = Omit<IPage, "page" | "styles">


export const aboutUsPageRequestStatus = createAction(
    AboutUsPageActions.ABOUT_US_REQUEST_STATUS,
    (payload: AboutUsStatus) => payload
);

export const aboutUsPageFetcher = createAction(
    AboutUsPageActions.ABOUT_US_FETCH_PAGE,
    (payload: IPage) => payload
);

export const aboutUsPage = createAction(
    AboutUsPageActions.ABOUT_US_PAGE
);