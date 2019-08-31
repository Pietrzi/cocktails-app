import { createStore } from "redux";
import combineReducer from "../redux/reducers/combineReducer";


const store = createStore(combineReducer);


export default store;