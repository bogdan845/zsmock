import {createAction} from "redux-actions";
import {ILatestNewsSingle, INewsState} from "../../newsReducer";

type SinglePostStatus = Omit<ILatestNewsSingle, "post">
type FetchSinglePost = Omit<INewsState, "blog" | "latestNews">;

export enum SinglePostActions {
    SINGLE_POST_REQUEST_STATUS = "SINGLE_POST_REQUEST_STATUS",
    FETCH_SINGLE_POST = "FETCH_SINGLE_POST",
    SINGLE_POST = "SINGLE_POST"
};

export const singlePostRequestStatus = createAction(
    SinglePostActions.SINGLE_POST_REQUEST_STATUS,
    (payload: { singlePost: SinglePostStatus }) => payload
);

export const singlePostFetcher = createAction(
    SinglePostActions.FETCH_SINGLE_POST,
    (payload: FetchSinglePost) => payload
);

export const singlePost = createAction(
    SinglePostActions.SINGLE_POST,
    (payload: string) => payload
);