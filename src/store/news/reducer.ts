import {handleActions} from "redux-actions";
import {NewsAction} from "./latest/sagas/actions";
import {RequestStatus} from "../request/requestStatus";
import {PostPreviewModel} from "../../utils/models/Post/Preview";


export interface INewsState {
    status: string;
    news: []
    latestNews: []
    singlePost: {}
}

const initialState = {
    status: RequestStatus.IDLE,
    news: [],
    latestNews: [],
    singlePost: {}
}

export const newsReducer = handleActions({
    [NewsAction.REQUEST_STATUS]: (state, {payload}) => {
        // console.log("status handler", payload)
        return {
            ...state,
            status: payload.status
        }
    },

    [NewsAction.FETCH_LATEST_NEWS]: (state, {payload}) => {
        // console.log("posts handler", payload.posts);
        return {
            ...state,
            latestNews: payload.latestNews
        }
    }
}, initialState);

