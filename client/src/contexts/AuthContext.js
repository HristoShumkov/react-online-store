import { createContext } from "react";

export const AuthContext = createContext({
    userId: "",
    username: "",
    email: "",
    profilePic: "",
    accessToken: "",
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
});