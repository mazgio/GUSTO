import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            sessionStorage.setItem('login', JSON.stringify({ ...action?.data }));

            return { ...state, authData: action.data, loading: false, errors: null };
        case actionType.LOGOUT:
            sessionStorage.clear();

            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
};

export default authReducer;