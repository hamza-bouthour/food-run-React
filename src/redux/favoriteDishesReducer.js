import * as ActionTypes from './ActionTypes';

function removeItem(array, id) {
    const index = array.indexOf(id)
    if (index > -1) {
        array.splice(index, 1)
    }
    return array
}

export const favorites = (state= {favoriteDishes: [], favoriteProducts: []}, action) => {
    switch(action.type) {
        case ActionTypes.MARK_FAVORITE:
            if (state.favoriteDishes.includes(action.payload)) {
                return state;
            }
            return state.favoriteDishes.concat(action.payload);
        case ActionTypes.UNMARK_FAVORITE:
            return state.filter(s=> s !== action.payload)    
        case ActionTypes.ADD_PRODUCT_TO_FAVORITE:
            if (state.favoriteProducts.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);
        case ActionTypes.REMOVE_PRODUCT_FROM_FAVORITE:
            return state.favoriteProducts.filter(s=>s !== action.payload)
        default:
            return state    
    }
}