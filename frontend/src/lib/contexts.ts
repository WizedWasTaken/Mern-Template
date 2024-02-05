import React, { Dispatch, SetStateAction } from "react";
import { UserType } from "./definitions";

export const AuthContext = React.createContext<{
  isLoggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export const UserContext = React.createContext<{
  user: UserType | null; // Allow for a null user when no user is logged in
  setUser: Dispatch<SetStateAction<UserType | null>>; // Allow for setting the user to null when logging out
}>({
  user: null, // Start with no user logged in
  setUser: () => {}, // Provide a no-op function as a default
});
