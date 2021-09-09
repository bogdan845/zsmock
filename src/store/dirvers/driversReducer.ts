import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {DriversPageActions} from "./sagas/driversPageActions";
import {PageModel} from "../../utils/models/Page/PageView";

const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}

export const driversReducer = handleActions({
    [DriversPageActions.DRIVERS_COFFEE_PAGE]: (state, {payload}) => {
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

