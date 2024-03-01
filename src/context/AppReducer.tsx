import { User } from "firebase/auth";
import { initialState } from "../constants";
import { IActionProps, IInitialStateProps, IProductProps } from "../interface";

const AppReducer = (
  state: IInitialStateProps = initialState,
  action: IActionProps
): IInitialStateProps => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload as User,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload as IProductProps],
      };
    case "REMOVE_ITEM": {
      const updatedCart = [...state.cart];
      if (typeof action.payload === "number") {
        updatedCart.splice(action.payload, 1);
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};

export default AppReducer;
