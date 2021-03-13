import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Array of middleware functions that will perform some logic on the actions passed to the rootReducer
const middlewares = [logger];

// Creating store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;