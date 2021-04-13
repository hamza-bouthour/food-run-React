import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { products } from './productsReducer';
import { populars } from './popularDishesReducer';
import { cart } from './cartReducer';
import { favorites } from './favoriteDishesReducer'
// import { account } from './accountReducer';


import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
    key: 'root',
    storage,
    debug: true
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            products,
            populars,
            cart,
            favorites,

        }),
        composeEnhancer(applyMiddleware(thunk, logger))
    );

    // const persistor = persistStore(store);

    return {  store };
}