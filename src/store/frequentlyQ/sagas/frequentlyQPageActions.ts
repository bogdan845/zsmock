import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IFrequentlyQState} from "../frequentlyQReducer";

export enum FrequentlyQPageActions {
    FREQUENTLY_Q_REQUEST_STATUS = "FREQUENTLY_Q_REQUEST_STATUS",
    FREQUENTLY_Q_FETCH_PAGE = "FREQUENTLY_Q_FETCH_PAGE",
    FREQUENTLY_Q_PAGE = "FREQUENTLY_Q_PAGE"
}

type FrequentlyQStatus = Omit<IFrequentlyQState, "list" | "styles">


export const frequentlyQPageRequestStatus = createAction(
    FrequentlyQPageActions.FREQUENTLY_Q_REQUEST_STATUS,
    (payload: FrequentlyQStatus) => payload
);

export const frequentlyQPageFetcher = createAction(
    FrequentlyQPageActions.FREQUENTLY_Q_FETCH_PAGE,
    (payload: IFrequentlyQState) => payload
);

export const frequentlyQPage = createAction(
    FrequentlyQPageActions.FREQUENTLY_Q_PAGE
);