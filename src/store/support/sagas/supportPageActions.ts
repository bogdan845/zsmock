import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum SupportPageActions {
    SUPPORT_REQUEST_STATUS = "SUPPORT_REQUEST_STATUS",
    FETCH_SUPPORT_PAGE = "FETCH_SUPPORT_PAGE",
    SUPPORT_PAGE = "SUPPORT_PAGE"
}

type SupportPageStatus = Omit<IPage, "page" | "styles">


export const supportPageRequestStatus = createAction(
    SupportPageActions.SUPPORT_REQUEST_STATUS,
    (payload: SupportPageStatus) => payload
);

export const supportPageFetcher = createAction(
    SupportPageActions.FETCH_SUPPORT_PAGE,
    (payload: IPage) => payload
);

export const supportPage = createAction(
    SupportPageActions.SUPPORT_PAGE
);