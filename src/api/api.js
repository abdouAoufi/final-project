import axios from "axios";

const axiousInstance = axios.create({
    baseURL: "https://final-project-gmc.herokuapp.com/",
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

export const createPostAPI = (payload) => {
    return axiousInstance.post("/post", payload);
};

export const getAllPostAPI = () => {
    return axiousInstance.get("/post");
};

export const updatePostAPI = (postId, payload) => {
    return axiousInstance.put(`/post?postid=${postId}`, payload);
};