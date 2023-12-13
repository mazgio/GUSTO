import axios from 'axios'; //use axios to make api calls

const API = axios.create({ baseURL: 'http://localhost:3001' }); //axios instance

//we have to send a token to backend that middleware can verify that we are login, it happens before every request
API.interceptors.request.use((req) => {
    if (sessionStorage.getItem('login')) {
        req.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.getItem('login')).token}`;


    }

    return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`); // function to return all the posts that we currently have
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost); //specify Url and the data the we are sending
export const likePost = (id) => API.patch(`/posts/${id}/likePost`); //we use a dynamic value for id
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value }); //id because i want to know which post i want to update
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);


