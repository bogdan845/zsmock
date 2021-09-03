import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum PaymentPageActions {
    PAYMENT_PAGE_REQUEST_STATUS = "PAYMENT_PAGE_REQUEST_STATUS",
    PAYMENT_PAGE_PARK_PAGE = "PAYMENT_PAGE_PARK_PAGE",
    PAYMENT_PAGE = "PAYMENT_PAGE"
}

type PaymentPageStatus = Omit<IPage, "page" | "styles">


export const paymentPageRequestStatus = createAction(
    PaymentPageActions.PAYMENT_PAGE_REQUEST_STATUS,
    (payload: PaymentPageStatus) => payload
);

export const paymentPageFetcher = createAction(
    PaymentPageActions.PAYMENT_PAGE_PARK_PAGE,
    (payload: IPage) => payload
);

export const paymentPage = createAction(
    PaymentPageActions.PAYMENT_PAGE
);