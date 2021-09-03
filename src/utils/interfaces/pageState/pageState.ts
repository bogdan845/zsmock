import {RequestType} from "../../../store/request/requestStatus";

export interface IPage {
    status: RequestType
    page: {} | [];
    styles?: string
}