import Dispatcher from './dispatcher';
import {ADD_PRODUCT, GET_PRODUCT } from './actiontypes';

export function addProduct(product) {
    Dispatcher.dispatch({
        type: ADD_PRODUCT,
        product,
    });
}

export function getProduct() {
    Dispatcher.dispatch({
        type: GET_PRODUCT
    })
}
