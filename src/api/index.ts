import axios, {AxiosPromise} from "axios";
import {AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create();

const get = (url: string, payload = {}): AxiosPromise => {
    return axiosInstance({
        method: "get",
        url,
        data: payload
    });
};

const post = (url: string, payload = {}): AxiosPromise => {
    return axiosInstance({
        method: "post",
        url,
        data: payload
    })
};

const availableDirections = (url: string, payload = {}): AxiosPromise => {
    return axiosInstance({
        method: "get",
        url,
    })
};

const availableTickets = (url: string, payload = {}): AxiosPromise => {
    return axiosInstance({
        method: "post",
        url,
        data: payload,
    })
};


export {get, post, availableTickets, availableDirections};