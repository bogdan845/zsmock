import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {ContactsPageActions} from "./sagas/contactsPageActions";
import {PageModel} from "../../utils/models/Page/PageView";

const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}

export const contactsReducer = handleActions({
    [ContactsPageActions.FETCH_CONTACTS_PAGE]: (state, {payload}) => {
        // console.log("contacts page", payload);
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

