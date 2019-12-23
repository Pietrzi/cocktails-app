import REGISTER from '../actions'

const initialState = {
    users: []
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
    case REGISTER:
        return {
            ...state,
            users: [...state.users, action.payload]
        };
    default:
        return state;
    }
}

export default authReducer;

