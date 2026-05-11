import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/",
});

API.interceptors.request.use((config) => {
    const storedUser = localStorage.getItem("authUser");

    if (storedUser) {
        const user = JSON.parse(storedUser);
        config.headers["x-user-id"] = user.id;
    }

    return config;
});

export default API;
