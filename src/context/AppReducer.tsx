import { User } from "firebase/auth";
import { initialState } from "../constants";

export interface IActionProps {
  type: string;
  payload: User | null;
}

export interface IInitialStateProps {
  user: User | null;
  dispatch?: React.Dispatch<IActionProps>;
}

const AppReducer = (
  state: IInitialStateProps = initialState,
  action: IActionProps
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
  }
};

export default AppReducer;
