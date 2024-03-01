import { ReactNode, createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
import { initialState } from "../constants";
import { IInitialStateProps } from "../interface";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const initState = {};
export const GlobalContext = createContext(initState as IInitialStateProps);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // to track user when changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch && dispatch({ type: "SET_USER", payload: user as User });
      } else {
        dispatch && dispatch({ type: "SET_USER", payload: null });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        user: state?.user ?? null,
        dispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
