import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from '../reducers/index'

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reduces)
// const store = createStoreWithMiddleware(reducer)
//
// export default store;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)
    return store;
}