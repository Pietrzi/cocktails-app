import FETCH_DRINKS from '../actions';

const initialState = {
    cocktails: [],
    midUrl: '',
    endUrl: ''
}

const cocktailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DRINKS:
            return {
                ...state,
                cocktails: action.payload,
                // midUrl: this.state.midUrl,
                // endUrl: this.state.endUrl
            }
        default:
            return state;
    }
}
export default cocktailsReducer;