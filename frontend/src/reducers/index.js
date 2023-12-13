import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';

export const reducers = combineReducers({ posts, auth }); //call combineReducers as a function and inside use all the reducers 