import { SIGNUP_USER, LOGIN_USER } from './types'

export const signup_user = (item) => {

    return {
        type: SIGNUP_USER,
        payload: item
    };
};

export const login_user = (token) => {
    return {
        type: LOGIN_USER,
        payload: token

    }
}