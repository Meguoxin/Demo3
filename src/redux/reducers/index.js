'use strict';

import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';

const rootReducer = combineReducers({
    counter: counter,
    user: user,
});

export default rootReducer;
