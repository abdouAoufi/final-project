import axios from "axios";

const axiousInstance = axios.create({
    baseURL: "http://localhost:1337",
    timeout: 9000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const loginAPI = (payload) => {
    return axiousInstance.post("/login", payload);
};

export const signupAPI = (payload) => {
    return axiousInstance.post("/signup", payload);
};