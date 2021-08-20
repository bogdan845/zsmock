import {IRootState} from "../rootReducer";

export const singlePostStatusSelector = (state: IRootState) => state.singlePost.status
export const singlePostSelector = (state: IRootState) => state.singlePost.post