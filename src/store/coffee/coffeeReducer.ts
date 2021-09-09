import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {CoffeePageActions} from "./sagas/coffeePageActions";
import {PageModel} from "../../utils/models/Page/PageView";

const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}

export const coffeeReducer = handleActions({
    [CoffeePageActions.FETCH_COFFEE_PAGE]: (state, {payload}) => {
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

