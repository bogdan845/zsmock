import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {BusServicePageActions} from "./sagas/busServicePageActions";
import {PageModel} from "../../utils/models/Page/PageView";

const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}

export const busServiceReducer = handleActions({
    [BusServicePageActions.BUS_SERVICE_FETCH_PAGE]: (state, {payload}) => {
        // console.log("bus services", payload);
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

