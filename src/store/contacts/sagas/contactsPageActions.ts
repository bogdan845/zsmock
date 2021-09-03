import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum ContactsPageActions {
    CONTACTS_REQUEST_STATUS = "CONTACTS_REQUEST_STATUS",
    FETCH_CONTACTS_PAGE = "FETCH_CONTACTS_PAGE",
    CONTACTS_PAGE = "CONTACTS_PAGE"
}

type ContactsStatus = Omit<IPage, "page" | "styles">


export const contactsPageRequestStatus = createAction(
    ContactsPageActions.CONTACTS_REQUEST_STATUS,
    (payload: ContactsStatus) => payload
);

export const contactsPageFetcher = createAction(
    ContactsPageActions.FETCH_CONTACTS_PAGE,
    (payload: IPage) => payload
);

export const contactsPage = createAction(
    ContactsPageActions.CONTACTS_PAGE
);