import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {CoffeePageActions, coffeePageFetcher, coffeePageRequestStatus} from "./coffeePageActions";
import api from "../../../api/services";

function* carParkPagePageHandler(): Generator<any> {
    try {
        yield put(coffeePageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.coffee.fetchCoffeePage);
        // console.log(fetchPage)
        if (fetchPage.data) {
            yield put(coffeePageFetcher({
                status: RequestStatus.SUCCEED,
                page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(coffeePageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* coffeePageSaga() {
    yield takeLatest(CoffeePageActions.COFFEE_PAGE, carParkPagePageHandler);
}