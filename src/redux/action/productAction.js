import { ActionTypes } from "../contants/action-types";
import fetchStoreApi from "../../api/fetchStoreApi";

// export const fetchProducts=()=>{
//     return async function (dispatch,getState){
//         const response =await fetchStoreApi.get("/products")
//         dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
//     }
// }

export const fetchProducts = () => async (dispatch) => {
  const response = await fetchStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct= (id) => async (dispatch) => {
  const response = await fetchStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};




export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
