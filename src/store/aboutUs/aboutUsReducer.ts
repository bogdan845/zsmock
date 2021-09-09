import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {AboutUsPageActions} from "./sagas/aboutUsPageActions";
import {PageModel} from "../../utils/models/Page/PageView";

const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}

export const aboutUsReducer = handleActions({
    [AboutUsPageActions.ABOUT_US_FETCH_PAGE]: (state, {payload}) => {
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

