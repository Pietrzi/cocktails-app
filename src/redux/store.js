import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import combineReducer from "../redux/reducers/combineReducer";

const initialState = {};

const middleware = [thunk];


const store = createStore(
    combineReducer,
    initialState,
      compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );


export default store;