import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {PaymentPageActions} from "./sagas/paymentPageActions";
import {PageModel} from "../../utils/models/Page/PageView";

const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}

export const paymentReducer = handleActions({
    [PaymentPageActions.PAYMENT_PAGE_PARK_PAGE]: (state, {payload}) => {
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

