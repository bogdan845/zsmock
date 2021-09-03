import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum CoffeePageActions {
    COFFEE_PAGE_REQUEST_STATUS = "COFFEE_PAGE_REQUEST_STATUS",
    FETCH_COFFEE_PAGE = "FETCH_COFFEE_PAGE",
    COFFEE_PAGE = "COFFEE_PAGE"
}

type CoffeePageStatus = Omit<IPage, "page" | "styles">


export const coffeePageRequestStatus = createAction(
    CoffeePageActions.COFFEE_PAGE_REQUEST_STATUS,
    (payload: CoffeePageStatus) => payload
);

export const coffeePageFetcher = createAction(
    CoffeePageActions.FETCH_COFFEE_PAGE,
    (payload: IPage) => payload
);

export const coffeePage = createAction(
    CoffeePageActions.COFFEE_PAGE
);