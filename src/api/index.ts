import axios from "axios";
import {AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create();

const get = (url: string, payload = {}): Promise<any> => {
    return axiosInstance({
        method: "get",
        url,
        data: payload
    });
}

const post = (url: string, payload = {}): Promise<any> => {
    return axiosInstance({
        method: "post",
        url,
        data: payload
    })
}


export {get, post};





