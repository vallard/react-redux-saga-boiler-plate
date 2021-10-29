import {
    FETCH_USERS,
    GOT_RESPONSE,
    ERROR,
    CREATE_USERS,
} from './constants';

export const fetchUsers = () => ({
    type: FETCH_USERS,
});

export const createUsers = (qty) => ({
    type: CREATE_USERS,
    qty,
})

export const gotResponse = (responseType, response) => ({
    type: GOT_RESPONSE,
    responseType,
    response,
})

export const apiError = (error) => ({
    type: ERROR,
    error,
})
