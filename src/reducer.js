
import {GET_PRODUCT, CART_PRODUCT} from './type/constants';
const initialState = {
    product: {},
    cart: [],
    loading: false,
    error: null,
  }
export default function productReducer(state =initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
        return {
            ...state,
            loading: true,
            product: action.obj
        }
    case CART_PRODUCT:
        return {
            ...state,
            loading: false,
            cart: action.cart
        }
    default:
        return state;
  }
}
