import { combineReducers } from 'redux';
import cocktailsReducer from './cocktailsReducer';

const combineReducer = combineReducers({
    cocktails: cocktailsReducer
})

export default combineReducer;