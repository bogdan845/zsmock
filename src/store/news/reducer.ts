import {handleActions} from "redux-actions";
import {NewsAction} from "./latest/sagas/actions";
import {RequestStatus} from "../request/requestStatus";


export interface INewsState {
    status: string
    posts: [];
}

const initialState = {
    status: RequestStatus.IDLE,
    posts: []
}

export const latestNewsReducer = handleActions({
    [NewsAction.LATEST_NEWS_REQUEST_STATUS]: (state, {payload}) => {
        // console.log("status handler", payload)
        return {
            ...state,
            status: payload.status
        }
    },

    [NewsAction.LATEST_NEWS_POSTS]: (state, {payload}) => {
        // console.log("posts handler", payload)
        return {
            ...state,
            posts: payload.posts
        }
    }
}, initialState);

