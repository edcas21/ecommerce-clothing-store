import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Gives redux access to local storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
    }
);

// Returns the store of reducers with each of their respective slices of the overall application state
export default persistReducer(persistConfig, rootReducer);