import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {PageModel} from "../../utils/models/Page/PageView";
import {WaitingHallPageActions} from "./sagas/waitingHallPageActions";


const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}


export const waitingHallReducer = handleActions({
    [WaitingHallPageActions.FETCH_WAITING_HALL_PAGE]: (state, {payload}) => {
        console.log("waiting hall", payload);
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

