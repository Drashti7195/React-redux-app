import {GET_PRODUCT, CART_PRODUCT} from './type/constants';

export const getProductDetails = obj =>
  {
    console.log("in action ::", obj)  
    return({
    type: GET_PRODUCT,
    obj,}
)};

export const cartProduct = cart =>
  {
    console.log("in action added::", cart)  
    return({
    type: CART_PRODUCT,
    cart,}
  )};