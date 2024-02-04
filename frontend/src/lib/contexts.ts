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
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
}>({
  user: {
    _id: "",
    username: "",
    password: "",
    email: "",
    roles: [],
  },
  setUser: () => {},
});
