import {handleActions} from "redux-actions";
import {NewsRequestAction} from "./newsActions";
import {RequestStatus} from "../request/requestStatus";
// import {PostPreviewModel} from "../../utils/models/Post/Preview";
import {LatestNewsActions} from "./sagas/latest/latestNewsActions";
import {SinglePostActions} from "./sagas/singlePost/singlePostActions";
import {SinglePostModel} from "../../utils/models/Post/SingleView";
import {NewsActions} from "./sagas/news/newsActions";


export interface INewsState {
    status: string;
    latestNews: [];
    singlePost: {};
}

export interface INewsStateBlog extends INewsState {
    news: {
        posts: []
        maxNumPages: number
    }
}

const initialState = {
    status: RequestStatus.IDLE,
    news: {
        posts: [],
        maxNumPages: 1
    },
    latestNews: [],
    singlePost: {}
}

export const newsReducer = handleActions({
    [NewsRequestAction.NEWS_REQUEST_STATUS]: (state, {payload}) => {
        // console.log("status handler", payload)
        return {
            ...state,
            status: payload.status
        }
    },
    [LatestNewsActions.FETCH_LATEST_NEWS]: (state, {payload}) => {
        // console.log("latest news handler", payload.latestNews);
        return {
            ...state,
            latestNews: payload.latestNews
            // latestNews: new PostPreviewModel(payload.latestNews)
        }
    },
    [SinglePostActions.FETCH_SINGLE_POST]: (state, {payload}) => {
        // console.log("single post handler", payload);
        return {
            ...state,
            singlePost: new SinglePostModel(payload.singlePost)
        }
    },
    [NewsActions.FETCH_NEWS]: (state, {payload}) => {
        // console.log("news handler", payload.news)
        return {
            ...state,
            news: {
                posts: payload.news.posts,
                maxNumPages: payload.news.maxNumPages
            }
        }
    }
}, initialState);

