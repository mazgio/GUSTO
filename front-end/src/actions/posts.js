import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, COMMENT, FETCH_BY_CREATOR } from '../constants/actionTypes.js';
import * as api from '../api/index.js'; // * means import everything from the actions as api


//Action creators are functions that return an actions

//To fetch all the posts we have to use redux tank, allows us to in here specify an additional arrow function (a function in an other function)

export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING }); //instead to return a function we have to dispatch the action

        const { data } = await api.fetchPost(id); //we destructure the data from the response  //fetching data from api

        dispatch({ type: FETCH_POST, payload: { post: data } }); //Sending data through the action payload

    } catch (error) {
        console.log(error);
    }
};

export const getPosts = (page) => async (dispatch) => {//asynchronous data
    try {
        dispatch({ type: START_LOADING });
        const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);

        dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } }); //type and payload (where we store all our posts)
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getPostsByCreator = (name) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await api.fetchPostsByCreator(name);

        dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        console.log(231213, searchQuery);
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        // console.log(data);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createPost(post); //a post api request to our backend server and we are sending a post

        dispatch({ type: CREATE, payload: data });

        navigate(`/posts/${data._id}`);
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post); //destructure the response and get data

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(sessionStorage.getItem('login'));

    try {
        const { data } = await api.likePost(id, user?.token);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const commentPost = (value, id) => async (dispatch) => {
    const user = JSON.parse(sessionStorage.getItem('login'));

    try {
        const { data } = await api.comment(value, id, user?.token);

        dispatch({ type: COMMENT, payload: data });

        return data.comments;
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await await api.deletePost(id); //we don´t need to do const response = ....because we are not interested in return data

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};