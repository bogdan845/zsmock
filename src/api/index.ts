import axios from "axios";
import {AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create();

const get = (url: string, payload = {}): Promise<any> => {
    return axiosInstance({
        method: "get",
        url,
        data: payload
    });
};

const getTickets = (url: string, payload = {}): Promise<any> => {
    return axiosInstance({
        method: "post",
        url,
        data: payload,
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.t1QuIwtgHseF8zBGf8Ijb5LVcGOtE5jONoCBIC8QMgg",
        }
    })
};

const post = (url: string, payload = {}): Promise<any> => {
    return axiosInstance({
        method: "post",
        url,
        data: payload
    })
};


export {get, post, getTickets};





