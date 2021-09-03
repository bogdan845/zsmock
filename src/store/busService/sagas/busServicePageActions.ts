import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum BusServicePageActions {
    BUS_SERVICE_REQUEST_STATUS = "BUS_SERVICE_REQUEST_STATUS",
    BUS_SERVICE_FETCH_PAGE = "BUS_SERVICE_FETCH_PAGE",
    BUS_SERVICE_PAGE = "BUS_SERVICE_PAGE"
}

type BusServiceStatus = Omit<IPage, "page" | "styles">


export const busServicePageRequestStatus = createAction(
    BusServicePageActions.BUS_SERVICE_REQUEST_STATUS,
    (payload: BusServiceStatus) => payload
);

export const busServicePageFetcher = createAction(
    BusServicePageActions.BUS_SERVICE_FETCH_PAGE,
    (payload: IPage) => payload
);

export const busServicePage = createAction(
    BusServicePageActions.BUS_SERVICE_PAGE
);