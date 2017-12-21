import * as TYPES from '../actions/user/loginTypes';

export function logIn() {
    return {
        type: TYPES.LOGIN_IN_DONE
    };
}

export function logOut() {
    return {
        type: TYPES.LOGGED_OUT
    };
}
