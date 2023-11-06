import axios from "axios";

const instance = axios.create({
    baseURL: "https://task-manager-api-f3rk.onrender.com/api",
    withCredentials: true,
});

export default instance;