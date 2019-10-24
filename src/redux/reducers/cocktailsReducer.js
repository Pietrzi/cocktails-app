import FETCH_DRINKS from '../actions';

const initialState = {
    cocktails: []
}

const cocktailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DRINKS:
            return {
                ...state,
                cocktails: [...action.payload]
            }
        default:
            return state;
    }
}
export default cocktailsReducer;