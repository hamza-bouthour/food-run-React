import { POPULARDATA } from '../shared/popularData';
import { CHEAPESTDATA } from '../shared/cheapestData';
import { QUICKESTDATA } from '../shared/quickestData';
import { PRODUCTSDATA } from '../shared/productsData';

export const initialState = {
    popularData: POPULARDATA,
    cheapestData: CHEAPESTDATA,
    quickestData: QUICKESTDATA,
    productsData: PRODUCTSDATA,
}

export const reducer = (state = initialState, action) => {
    return state;
}