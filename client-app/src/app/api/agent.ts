import axios, { AxiosResponse } from "axios";
import { Job } from "../models/job";
import { User, UserFormValues } from "../models/user";
import CommonStore from "../stores/commonStore";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
try{
    await sleep(1000);
    return response;
} catch (error) {
    console.log(error);
    return await Promise.reject(error);
}
});



const responseBody = <T> (response: AxiosResponse<T>) => response.data;

//Instead of the Headers down below, we can use the following code to set the token in the headers
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('jwt');
    if(token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const requests = {

    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body ,{headers: {"Authorization" : `Bearer ${localStorage.getItem("jwt")}`}}).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body , {headers: {"Authorization" : `Bearer ${localStorage.getItem("jwt")}`}}).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url , {headers: {"Authorization" : `Bearer ${localStorage.getItem("jwt")}`}}).then(responseBody)

}


const Jobs = {
    
    list: () => requests.get<Job[]>('/jobs'),
    details: (id: string) => requests.get<Job>(`/jobs/${id}`),
    create: (job: Job) => requests.post<void>('/jobs', job),
    update: (job: Job) => requests.put<void>(`/jobs/${job.id}`, job),
    delete: (id: string) => requests.del<void>(`/jobs/${id}`)

}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}

const agent = {
    Jobs,
    Account
}

export default agent;