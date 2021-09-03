import {get} from "../index";
import {APP_URLS} from "../constants/urls";


export const fetchPaymentPage = () => {
    return get(APP_URLS.pages.payment);
}