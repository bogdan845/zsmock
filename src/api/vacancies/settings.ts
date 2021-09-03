import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchVacanciesPage = () => {
    return get(APP_URLS.pages.vacancies);
}