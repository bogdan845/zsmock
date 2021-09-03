import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IPage} from "../../../utils/interfaces/pageState/pageState";


export enum VipAutoPageActions {
    VIP_AUTO_REQUEST_STATUS = "VIP_AUTO_REQUEST_STATUS",
    FETCH_VIP_AUTO_PAGE = "FETCH_VIP_AUTO_PAGE",
    VIP_AUTO_PAGE = "VIP_AUTO_PAGE"
}

type VipAutoStatus = Omit<IPage, "page" | "styles">


export const vipAutoPageRequestStatus = createAction(
    VipAutoPageActions.VIP_AUTO_REQUEST_STATUS,
    (payload: VipAutoStatus) => payload
);

export const vipAutoPageFetcher = createAction(
    VipAutoPageActions.FETCH_VIP_AUTO_PAGE,
    (payload: IPage) => payload
);

export const vipAutoPage = createAction(
    VipAutoPageActions.VIP_AUTO_PAGE
);