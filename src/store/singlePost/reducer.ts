import {handleActions} from "redux-actions";
import {RequestStatus, RequestType} from "../request/requestStatus";
import {SinglePostAction} from "./sagas/actions";
import {PostPreviewModel} from "../../utils/models/Post/Preview";
import {SinglePostModel} from "../../utils/models/Post/Single";

export interface ISinglePost {
    status: RequestType,
    post: SinglePostModel;
}

const initialState = {
    status: RequestStatus.IDLE,
    post: {}
};

export const singlePostReducer = handleActions({
    [SinglePostAction.SINGLE_POST_REQUEST_STATUS]: (state, {payload}) => {
        // console.log("single post request", payload.status);
        return ({
            ...state,
            status: payload.status
        })
    },
    [SinglePostAction.SINGLE_POST_FETCHER]: (state, {payload}) => {
        // console.log("fetch single post", payload.post);
        return ({
            ...state,
            post: new SinglePostModel(payload.post)
        })
    }
}, initialState);