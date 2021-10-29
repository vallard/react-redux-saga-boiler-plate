import {
    FETCH_USERS,
    GOT_RESPONSE,
    ERROR,
} from './constants';

const initState = {
    loading: false,
    users: [],
}

const API = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USERS:
        case FETCH_VEHICLES:
        case FETCH_REL_VEHICLES:
            return { ...state, loading: true, error: null };

        case GOT_RESPONSE:
            if (action.responseType === FETCH_USERS) {
                return { ...state, loading: false, error: null, users: action.response }
            }
            // unknown response type. 
            return { ...state, loading: false, error: "unimplemented response" }
        case ERROR:
            return { ...state, loading: false, error: action.error }
        default:
            return { ...state };
    }
};

export default API;
