import useFetchApi from "../../Hooks/useFetchApi";
import { ActionTypes } from "../Constants/action-type";
import * as API from "../../API/Api";

export const fetchProducts = () => {
  return async (dispatch, gestate) => {
    // const { data, loading, status } = useFetchApi("products");

    const response = await API.getAllProducts("products");

    console.log(response);
    //Automatically dispatch the menthod
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const SetProduct = (product) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: product,
  };
};

export const SelectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
