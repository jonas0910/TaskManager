import axios from './axios.js';



export const registerRequest = async (user) => {
        const response = await axios.post(`/register`, user);
        return response;
}

export const loginRequest = async(user) => {
    const response = await axios.post(`/login`, user);
    console.log(response);
    return response;
}

export const verifyTokenRequest =() => {
    const response = axios.get(`/verifyToken`);
    return response;
}
