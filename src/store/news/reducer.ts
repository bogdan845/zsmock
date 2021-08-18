import {handleActions} from "redux-actions";
import {NewsAction} from "./sagas/actions";
import {RequestStatus, RequestType} from "../request/requestStatus";


export interface INewsState {
    status: RequestType;
    posts: [];
}

const initialState = {
    status: RequestStatus.IDLE,
    posts: []
}

export const newsReducer = handleActions({
    [NewsAction.FETCH]: (state, action) => {
        console.log("news", action.payload);
        return {
            ...state,
            ...action.payload
        }
    }
}, initialState);

