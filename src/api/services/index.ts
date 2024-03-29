import axios from "axios";
import {AxiosInstance, AxiosResponse} from "axios";


const BASE_URL = "http://localhost:3000/";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL
});

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


export default {BASE_URL, get, post};





