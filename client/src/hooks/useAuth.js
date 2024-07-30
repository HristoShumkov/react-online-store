import authAPI from "../api/authAPI";
import { useAuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await authAPI.login(email, password);

        changeAuthState(authData);

        return authData;
    }

    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, username, password, profilePic) => {
        const { password: _, ...authData } = await authAPI.register(email, username, password, profilePic);

        changeAuthState(authData);

        return authData;
    }

    return registerHandler;
}

export const useLogout = () => {
    const { localLogout } = useAuthContext();

    const logoutHandler = async () => {
        localLogout();

        await authAPI.logout();
    }

    return logoutHandler;
}