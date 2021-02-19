import { POPULARDATA } from '../shared/popularData';
import { CHEAPESTDATA } from '../shared/cheapestData';
import { QUICKESTDATA } from '../shared/quickestData';
import { PRODUCTSDATA } from '../shared/productsData';
import * as ActionTypes from './ActionTypes';

export const initialState = {
    popularData: POPULARDATA,
    cheapestData: CHEAPESTDATA,
    quickestData: QUICKESTDATA,
    productsData: PRODUCTSDATA,
    cartItems: 0,
    cartProducts: [],
    pickedDish: 0,
    total : 0,
    button: {
        enabled: true,
        text: 'add'
    },
    account: {  firstName: '',
    lastName: '',
    phoneNum: '',
    email: '',},
    buttonCheckedStyle: {
        background: 'red'
    }

  
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT:
            return {...state, cartProducts: [...state.cartProducts,action.payload], cartItems: state.cartItems + 1}
        case ActionTypes.REMOVE_PRODUCT:
            return {...state, cartItems: state.cartItems - 1}
        case ActionTypes.REMOVE_PRODUCT :
            return {...state, cartProduct: action.payload}
        case ActionTypes.ADD_ACCOUNT :
            return {...state, account: action.payload}
        case ActionTypes.REMOVE_ALL_PRODUCTS:
            return {...state, cartProducts: [], cartItems: 0}    
        default:
        return state;
    }
}
// export const Account = (state = {account:{}}, action) => {
//     swtich (action.type) {
//         case ActionTypes.ADD_ACCOUNT:
//             return {...state, account = action.payload};
//         default:
//             return state;
//     }
// }