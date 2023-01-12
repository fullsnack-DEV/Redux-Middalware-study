import { ActionTypes } from "../Constants/action-type";

const intialState = {
  products: [],
};

export const ProductReducer = (state = intialState, { type, payload }) => {
  // Switch case

  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: payload };

    default:
      return state;
  }
};
