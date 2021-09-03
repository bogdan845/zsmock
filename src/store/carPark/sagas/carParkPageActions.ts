import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum CarParkPageActions {
    CAR_PARK_REQUEST_STATUS = "CAR_PARK_REQUEST_STATUS",
    FETCH_CAR_PARK_PAGE = "FETCH_CAR_PARK_PAGE",
    CAR_PARK_PAGE = "CAR_PARK_PAGE"
}

type CarParkStatus = Omit<IPage, "page" | "styles">


export const carParkPageRequestStatus = createAction(
    CarParkPageActions.CAR_PARK_REQUEST_STATUS,
    (payload: CarParkStatus) => payload
);

export const carParkPageFetcher = createAction(
    CarParkPageActions.FETCH_CAR_PARK_PAGE,
    (payload: IPage) => payload
);

export const carParkPage = createAction(
    CarParkPageActions.CAR_PARK_PAGE
);