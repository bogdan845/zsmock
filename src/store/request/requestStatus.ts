export enum Request {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCEED = "SUCCEED",
    FAILED = "FAILED"
}

export type RequestType = Request.IDLE | Request.LOADING | Request.SUCCEED | Request.FAILED;