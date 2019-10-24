import { combineReducers } from 'redux';
import cocktailsReducer from './cocktailsReducer';
import authReducer from './authReducer';
import searchReducer from './searchReducer';

const combineReducer = combineReducers({
    cocktails: cocktailsReducer,
    search: searchReducer,
    users: authReducer
})

export default combineReducer;