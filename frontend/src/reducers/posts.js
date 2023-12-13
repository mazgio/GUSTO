//What is reducer? It is a function that accepts the state and also it accepts the action


import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes.js';


//We have different statements for a lot of different things and for this reason we use the switch statement
const variable = (state = { isLoading: true, posts: [] }, action) => { /*{in reducers the state has to be always equal to something, in our case posts=[]}*/
    switch (action.type) { /*{as a key we have the action.type}*/
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            console.log(state, "loading ended");
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            console.log(action.payload, "reducers");
            return { ...state, posts: action.payload };

        case FETCH_BY_CREATOR:
            return { ...state, posts: action.payload };
        case FETCH_POST:
            console.log("fetchPost", action.payload.post);
            return { ...state, post: action.payload.post };
        case LIKE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) }; //like the update post
        case COMMENT:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post._id === +action.payload._id) {
                        return action.payload;
                    }
                    return post;
                }),
            };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] }; //spread all the posts and then we have to add a new post
        case UPDATE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };//the output of any map method is an array, action.payload is the newly updated post
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) }; //we filter out the post that we want to delete 
        default:
            return state;
    }
};

export default variable;