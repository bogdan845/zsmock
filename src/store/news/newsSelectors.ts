import {IRootState} from "../rootReducer";

export const latestNewsSelector = (state: IRootState) => state.news.latestNews;
export const singlePostSelector = (state: IRootState) => state.news.singlePost;
export const newsSelector = (state: IRootState) => state.news.blog;