import {createAction} from "redux-actions";
import {RequestType} from "../../request/requestStatus";
import {INewsState} from "../reducer";

export enum NewsAction {
    STATUS = "STATUS",
    FETCH = "FETCH"
}

export const newsStatusRequest = createAction(
    NewsAction.STATUS,
    (payload: INewsState) => payload
);

export const fetchNews = createAction(
    NewsAction.FETCH
)
