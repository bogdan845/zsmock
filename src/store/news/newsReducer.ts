import {handleActions} from "redux-actions";
import {RequestStatus, RequestType} from "../request/requestStatus";
// import {PostPreviewModel} from "../../utils/models/Post/Preview";
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
    maxNumPages: number
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
        maxNumPages: 1
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
        // console.log("latest newsBlog handler", payload.latestNews);
        return {
            ...state,
            latestNews: {
                status: payload.latestNews.status,
                posts: payload.latestNews.posts
            }
        }
    },
    [SinglePostActions.FETCH_SINGLE_POST]: (state, {payload}) => {
        // console.log("single news post handler", payload);
        return {
            ...state,
            singlePost: {
                status: payload.singlePost.status,
                post: new SinglePostModel(payload.singlePost.post),
                // post: payload.SinglePost.post
            }
        }
    },
    [NewsBlogActions.FETCH_NEWS_BLOG]: (state, {payload}) => {
        // console.log("newsBlog handler", payload)
        return {
            ...state,
            blog: {
                status: payload.blog.status,
                posts: payload.blog.posts,
                maxNumPages: payload.blog.maxNumPages
            }
        }
    }
}, initialState);

