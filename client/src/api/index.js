import axios from 'axios';

const API = axios.create({baseURL:"http://localhost:5000"})
// const url = "http://localhost:5000/posts"
// const url = "https://sharestories-mern.herokuapp.com/posts"

// all the request will have this,gonna happen for every request => adding the token in every request headers
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const fetchPosts = () => {
    return API.get('/posts')
}

export const createNewPost = (post) => {
    return API.post('/posts',post)
}

export const modifyPost = (id,post) => {
    return API.patch(`/posts/${id}`,post)
}

export const removePost = (id) => {
    return API.delete(`/posts/${id}`)
}

export const likePost = (id) => {
    return API.patch(`/posts/${id}/likePost`)
}

// User Data
export const signIn = (formData) => {
    return API.post("/users/signin",formData)
}
export const signUp = (formData) => {
    return API.post("/users/signup",formData)
}