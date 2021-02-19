import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer, initialState } from './reducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { PopularData } from './popularData'

export const configueStore = () => {
    const store = createStore(
        
        reducer, initialState, applyMiddleware(thunk, logger))
    return store;
}