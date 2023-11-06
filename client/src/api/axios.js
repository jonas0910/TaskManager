import axios from "axios";

const instance = axios.create({
    baseURL: "https://task-manager-api-f3rk.onrender.com",
    withCredentials: true,
});

export default instance;