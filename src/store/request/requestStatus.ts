export enum RequestStatus {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCEED = "SUCCEED",
    FAILED = "FAILED"
}

export type RequestType = RequestStatus.IDLE | RequestStatus.LOADING | RequestStatus.SUCCEED | RequestStatus.FAILED;