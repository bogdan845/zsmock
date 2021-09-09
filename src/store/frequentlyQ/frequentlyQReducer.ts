import {handleActions} from "redux-actions";
import {RequestStatus, RequestType} from "../request/requestStatus";
import {FrequentlyQPageActions} from "./sagas/frequentlyQPageActions";


export interface IFrequentlyQState {
    status: RequestType,
    list: [],
    styles?: ""
}

const initialState : IFrequentlyQState  = {
    status: RequestStatus.IDLE,
    list: [],
}


export const frequentlyQReducer = handleActions({
    [FrequentlyQPageActions.FREQUENTLY_Q_FETCH_PAGE]: (state, {payload}) => {
        return {
            ...state,
            status: payload.status,
            list: payload.list,
        }
    },
}, initialState)

