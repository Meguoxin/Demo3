'use strict';

import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import register from './register';

const rootReducer = combineReducers({
    counter: counter,
    user: user,
    register: register,
});

export default rootReducer;
