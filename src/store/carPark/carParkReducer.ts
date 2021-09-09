import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {CarParkPageActions} from "./sagas/carParkPageActions";
import {PageModel} from "../../utils/models/Page/PageView";

const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}

export const carParkReducer = handleActions({
    [CarParkPageActions.FETCH_CAR_PARK_PAGE]: (state, {payload}) => {
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

