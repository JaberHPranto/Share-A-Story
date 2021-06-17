import axios from 'axios'

const url = "http://localhost:5000/posts"
// const url = "https://sharestories-mern.herokuapp.com/posts"

export const fetchPosts = () => {
    return axios.get(url)
}

export const createNewPost = (post) => {
    return axios.post(url,post)
}

export const modifyPost = (id,post) => {
    return axios.patch(`${url}/${id}`,post)
}

export const removePost = (id) => {
    return axios.delete(`${url}/${id}`)
}

export const likePost = (id) => {
    return axios.patch(`${url}/${id}/likePost`)
}