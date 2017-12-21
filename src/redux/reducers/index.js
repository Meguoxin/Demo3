import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import register from './register';
import forget from './forget';
import shortMessage from './shortMessage';
import navigationReducer from './nav';

const rootReducer = combineReducers({
    counter,
    user,
    register,
    forget,
    shortMessage,
    nav: navigationReducer
});

export default rootReducer;
