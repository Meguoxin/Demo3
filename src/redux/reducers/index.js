'use strict';

import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import register from './register';
import forget from './forget';
import shortMessage from './shortMessage';

const rootReducer = combineReducers({
    counter: counter,
    user : user,
    register: register,
    forget:forget,
    shortMessage:shortMessage,
});

export default rootReducer;
