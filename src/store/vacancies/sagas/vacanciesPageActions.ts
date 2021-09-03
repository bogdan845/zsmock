import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum VacanciesPageActions {
    VACANCIES_REQUEST_STATUS = "VACANCIES_REQUEST_STATUS",
    FETCH_VACANCIES_PAGE = "FETCH_VACANCIES_PAGE",
    VACANCIES_PAGE = "VACANCIES_PAGE"
}

type VacanciesStatus = Omit<IPage, "page" | "styles">


export const vacanciesPageRequestStatus = createAction(
    VacanciesPageActions.VACANCIES_REQUEST_STATUS,
    (payload: VacanciesStatus) => payload
);

export const vacanciesPageFetcher = createAction(
    VacanciesPageActions.FETCH_VACANCIES_PAGE,
    (payload: IPage) => payload
);

export const vacanciesPage = createAction(
    VacanciesPageActions.VACANCIES_PAGE
);