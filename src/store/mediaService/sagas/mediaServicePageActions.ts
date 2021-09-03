import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum MediaServicePageActions {
    MEDIA_SERVICE_REQUEST_STATUS = "MEDIA_SERVICE_REQUEST_STATUS",
    MEDIA_SERVICE_FETCH_PAGE = "MEDIA_SERVICE_FETCH_PAGE",
    MEDIA_SERVICE_PAGE = "MEDIA_SERVICE_PAGE"
}

type MediaServiceStatus = Omit<IPage, "page" | "styles">


export const mediaServicePageRequestStatus = createAction(
    MediaServicePageActions.MEDIA_SERVICE_REQUEST_STATUS,
    (payload: MediaServiceStatus) => payload
);

export const mediaServicePageFetcher = createAction(
    MediaServicePageActions.MEDIA_SERVICE_FETCH_PAGE,
    (payload: IPage) => payload
);

export const mediaServicePage = createAction(
    MediaServicePageActions.MEDIA_SERVICE_PAGE
);