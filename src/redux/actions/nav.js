'use strict';

import * as TYPES from './actionTypes';

export function logIn(){
    return {
        'type': TYPES.LOGGED_IN
    }
}

export function logOut(){
    return {
        'type': TYPES.LOGGED_OUT
    }
}