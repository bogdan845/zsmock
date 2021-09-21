import {handleActions} from "redux-actions";
import {RequestStatus, RequestType} from "../request/requestStatus";
import {LatestNewsActions} from "./sagas/latest/latestNewsActions";
import {SinglePostActions} from "./sagas/singlePost/singlePostActions";
import {SinglePostModel} from "../../utils/models/Post/SingleView";
import {NewsBlogActions} from "./sagas/newsBlog/newsBlogActions";

export interface ILatestNews {
    status: RequestType;
    posts: [];
}

export interface ILatestNewsSingle {
    status: RequestType;
    post: {};
}

export interface INewsBlog {
    status: RequestType
    posts: []
    maxPages: number
}

export interface INewsState {
    latestNews: ILatestNews;
    singlePost: ILatestNewsSingle;
    blog: INewsBlog
}

const initialState = {
    blog: {
        status: RequestStatus.IDLE,
        posts: [],
        maxPages: 1
    },
    latestNews: {
        status: RequestStatus.IDLE,
        posts: []
    },
    singlePost: {
        status: RequestStatus.IDLE,
        post: {}
    }
}


export const newsReducer = handleActions({
    [LatestNewsActions.FETCH_LATEST_NEWS]: (state, {payload}) => {
        return {
            ...state,
            latestNews: {
                status: payload.latestNews.status,
                posts: payload.latestNews.posts
            }
        }
    },

    [SinglePostActions.SINGLE_POST_REQUEST_STATUS]: (state, {payload}) => {
        return ({
            ...state,
            singlePost: {
                status: payload.singlePost.status,
                post: {}
            }
        })
    },

    [SinglePostActions.FETCH_SINGLE_POST]: (state, {payload}) => {
        return {
            ...state,
            singlePost: {
                status: payload.singlePost.status,
                post: new SinglePostModel(payload.singlePost.post),
            }
        }
    },

    [NewsBlogActions.NEWS_BLOG_REQUEST_STATUS]: (state, {payload}) => {
        return ({
            ...state,
            blog: {
                status: payload.blog.status,
                posts: [],
                maxPages: 0
            }
        })
    },
    [NewsBlogActions.FETCH_NEWS_BLOG]: (state, {payload}) => {
        return {
            ...state,
            blog: {
                status: payload.blog.status,
                posts: payload.blog.posts,
                maxPages: payload.blog.maxPages
            }
        }
    }
}, initialState);

