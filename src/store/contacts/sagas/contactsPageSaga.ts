import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../request/requestStatus";
import {ContactsPageActions, contactsPageFetcher, contactsPageRequestStatus} from "./contactsPageActions";
import api from "../../../api/services";

function* contactsPageHandler(): Generator<any> {
    try {
        yield put(contactsPageRequestStatus({status: RequestStatus.LOADING}));
        const fetchPage: any = yield call(api.contacts.fetchContactPage);
        if (fetchPage.data) {
            yield put(contactsPageFetcher({
                    status: RequestStatus.SUCCEED,
                    page: fetchPage.data,
            }))
        }
    } catch (err) {
        yield put(contactsPageRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* contactsPageSaga() {
    yield takeLatest(ContactsPageActions.CONTACTS_PAGE, contactsPageHandler);
}