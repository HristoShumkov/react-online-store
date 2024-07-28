import { useContext } from "react";

import authAPI from "../api/authAPI";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await authAPI.login(email, password);

        changeAuthState(authData);

        return authData;
    }

    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, username, password, profilePic) => {
        const { password: _, ...authData } = await authAPI.register(email, username, password, profilePic);

        changeAuthState(authData);

        return authData;
    }

    return registerHandler;
}