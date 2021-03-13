import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

// Returns the store of reducers with each of their respective slices of the overall application state
export default combineReducers(
    {
        // userReducer state slice identified with user key
        // key: value
        // user: [userReducer state slice]
        user: userReducer
    }
);