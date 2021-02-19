import * as ActionTypes from './ActionTypes';

function removeItem(event, data) {

    for (let i=0; i<data.length; i++) {
        if (data[i] === event.target.value) {
            console.log(data.splice(i, 1))
            console.log(data)
            return data
        }
    }
}
export const addProduct = (product) => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: product
})

export const addProductNumber = () => ({
    type: ActionTypes.ADD_PRODUCT_NUMBER
})
export const removeProduct = (event, product) => ({
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
        cartProducts: removeItem(event, product)
    }
})
export const removeAllProducts = () => ({
    type: ActionTypes.REMOVE_ALL_PRODUCTS,
    // payload: {
    //     cartProducts: [],
    //     cartItems: product
    // }
})

export const addAccount = (firstName, lastName, email, password) => ({
    type: ActionTypes.ADD_ACCOUNT,
    payload: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password

    }
})