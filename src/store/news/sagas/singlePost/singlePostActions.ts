import {createAction} from "redux-actions";
import {INewsStateBlog} from "../../newsReducer";


type SinglePostStatus = Omit<INewsStateBlog, "news" | "latestNews" | "singlePost">;
type SinglePost = Omit<INewsStateBlog, "news" | "latestNews" | "status">;

export enum SinglePostActions {
    SINGLE_POST_REQUEST_STATUS = "SINGLE_POST_REQUEST_STATUS",
    FETCH_SINGLE_POST = "FETCH_SINGLE_POST",
    SINGLE_POST = "SINGLE_POST"
}

export const singlePostRequestStatus = createAction(
    SinglePostActions.SINGLE_POST_REQUEST_STATUS,
    (payload: SinglePostStatus) => payload
)

export const singlePostFetcher = createAction(
    SinglePostActions.FETCH_SINGLE_POST,
    (payload: SinglePost) => payload
)

export const singlePost = createAction(
    SinglePostActions.SINGLE_POST,
    (payload: string) => payload
)

