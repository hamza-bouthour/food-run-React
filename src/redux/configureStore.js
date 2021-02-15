import { createStore } from 'redux';
import { reducer, initialState } from './reducer'

export const configueStore = () => {
    const store = createStore(reducer, initialState)
    return store;
}