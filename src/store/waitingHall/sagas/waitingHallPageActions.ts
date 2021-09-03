import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum WaitingHallPageActions {
    WAITING_HALL_PAGE_REQUEST_STATUS = "WAITING_HALL_PAGE_REQUEST_STATUS",
    FETCH_WAITING_HALL_PAGE = "FETCH_WAITING_HALL_PAGE",
    WAITING_HALL_PAGE = "WAITING_HALL_PAGE"
}

type WaitingHallPageStatus = Omit<IPage, "page" | "styles">


export const waitingHallPageRequestStatus = createAction(
    WaitingHallPageActions.WAITING_HALL_PAGE_REQUEST_STATUS,
    (payload: WaitingHallPageStatus) => payload
);

export const waitingHallPageFetcher = createAction(
    WaitingHallPageActions.FETCH_WAITING_HALL_PAGE,
    (payload: IPage) => payload
);

export const waitingHallPage = createAction(
    WaitingHallPageActions.WAITING_HALL_PAGE
);