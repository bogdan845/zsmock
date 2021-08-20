import {createAction} from "redux-actions";
import {ISinglePost} from "../reducer";

type SinglePostStatus = Omit<ISinglePost, "post">;
type FetchSinglePost = Omit<ISinglePost, "status">;

export enum SinglePostAction {
    SINGLE_POST_REQUEST_STATUS = "SINGLE_POST_REQUEST_STATUS",
    SINGLE_POST_FETCHER = "SINGLE_POST_FETCHER",
    SINGLE_POST = "SINGLE_POST"
};


export const singlePostRequestStatus = createAction(
    SinglePostAction.SINGLE_POST_REQUEST_STATUS,
    (payload: SinglePostStatus) => payload
);

export const singlePostFetcher = createAction(
    SinglePostAction.SINGLE_POST_FETCHER,
    (payload: FetchSinglePost) => payload
);

export const singlePost = createAction(
    SinglePostAction.SINGLE_POST,
    (payload: string) => payload
);