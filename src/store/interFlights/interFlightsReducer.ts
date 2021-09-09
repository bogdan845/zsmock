import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {InterFlitghsPageActions} from "./sagas/interFlitghsPageActions";
import {PageModel} from "../../utils/models/Page/PageView";

const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}

export const interFlightsReducer = handleActions({
    [InterFlitghsPageActions.MEDIA_SERVICE_FETCH_PAGE]: (state, {payload}) => {
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

