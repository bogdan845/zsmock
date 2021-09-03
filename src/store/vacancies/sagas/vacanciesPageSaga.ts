import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {VacanciesPageActions, vacanciesPageFetcher, vacanciesPageRequestStatus} from "./vacanciesPageActions";
import api from "../../../api/services";


function* vacanciesPageHandler(): Generator<any> {
    try {
        yield put(vacanciesPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.vacancies.fetchVacanciesPage);
        if (fetchPage.data) {
            yield put(vacanciesPageFetcher({
                status: RequestStatus.SUCCEED,
                page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(vacanciesPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* vacanciesPageSaga() {
    yield takeLatest(VacanciesPageActions.VACANCIES_PAGE, vacanciesPageHandler);
}