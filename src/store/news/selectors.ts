import {IRootState} from "../rootReducer";

export const latestNewsPostsSelector = (state : IRootState) => state.latestNews.posts;
export const latestNewsStatusSelector = (state : IRootState) => state.latestNews.status;
