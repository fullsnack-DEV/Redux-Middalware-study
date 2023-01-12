import { ActionTypes } from "../Constants/action-type";

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
