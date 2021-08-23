import {IRootState} from "../rootReducer";

export const latestNewsStatusSelector = (state: IRootState) => state.news.status;
export const latestNewsSelector = (state: IRootState) => state.news.latestNews;
export const singlePostSelector = (state: IRootState) => state.news.singlePost;
export const newsSelector = (state: IRootState) => state.news.news;
