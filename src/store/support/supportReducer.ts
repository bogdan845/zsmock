import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {SupportPageActions} from "./sagas/supportPageActions";
import {PageModel} from "../../utils/models/Page/PageView";

const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}

export const supportReducer = handleActions({
    [SupportPageActions.FETCH_SUPPORT_PAGE]: (state, {payload}) => {
        // console.log("support", payload);
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

