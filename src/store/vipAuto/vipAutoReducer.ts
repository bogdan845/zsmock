import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {PageModel} from "../../utils/models/Page/PageView";
import {VipAutoPageActions} from "./sagas/vipAutoPageActions";


const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}


export const vipAutoReducer = handleActions({
    [VipAutoPageActions.FETCH_VIP_AUTO_PAGE]: (state, {payload}) => {
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

