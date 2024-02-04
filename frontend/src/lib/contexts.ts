import React, { Dispatch, SetStateAction } from "react";

export const AuthContext = React.createContext<{
  isLoggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});
