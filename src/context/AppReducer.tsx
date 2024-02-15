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

    default:
      return state;
  }
};

export default AppReducer;
