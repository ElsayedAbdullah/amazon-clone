import { ReactNode, createContext, useEffect, useReducer } from "react";
import AppReducer, { IInitialStateProps } from "./AppReducer";
import { initialState } from "../constants";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const initState = {};
export const GlobalContext = createContext(initState as IInitialStateProps);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // to track user when changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        dispatch && dispatch({ type: "SET_USER", payload: user });
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
      value={{ user: state?.user ?? null, dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
