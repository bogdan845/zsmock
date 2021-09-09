import {handleActions} from "redux-actions";
import {RequestStatus} from "../request/requestStatus";
import {PageModel} from "../../utils/models/Page/PageView";
import {VacanciesPageActions} from "./sagas/vacanciesPageActions";


const initialState = {
    status: RequestStatus.IDLE,
    page: {},
}


export const vacanciesReducer = handleActions({
    [VacanciesPageActions.FETCH_VACANCIES_PAGE]: (state, {payload}) => {
        return {
            ...state,
            status: payload.status,
            page: new PageModel(payload.page),
        }
    },
}, initialState)

