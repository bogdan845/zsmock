import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum DriversPageActions {
    DRIVERS_PAGE_REQUEST_STATUS = "DRIVERS_PAGE_REQUEST_STATUS",
    DRIVERS_COFFEE_PAGE = "DRIVERS_COFFEE_PAGE",
    DRIVERS_PAGE = "DRIVERS_PAGE"
}

type DriversPageStatus = Omit<IPage, "page" | "styles">


export const driversPageRequestStatus = createAction(
    DriversPageActions.DRIVERS_PAGE_REQUEST_STATUS,
    (payload: DriversPageStatus) => payload
);

export const driversPageFetcher = createAction(
    DriversPageActions.DRIVERS_COFFEE_PAGE,
    (payload: IPage) => payload
);

export const driversPage = createAction(
    DriversPageActions.DRIVERS_PAGE
);