import axios from "axios";
import { tokenStore } from "./tokenStore";

const api = axios.create({
    baseURL: "https://api.freeapi.app/api/v1",
    headers:{
        "Content-Type": "application/json",
    }
});



// REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
    const token = tokenStore.getAccess();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},(error) => Promise.reject(error)
);

export default api;
