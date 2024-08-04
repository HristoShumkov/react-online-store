import { useEffect, useState } from "react";
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
        if (!profilePic) {
            profilePic = "/default-profile-picture.png";
        }

        const { password: _, ...authData } = await authAPI.register(email, username, password, profilePic);

        changeAuthState(authData);
        
        await authAPI.postPublicUserRecord(authData);

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

export const useGetUserDetails = () => {
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        (async () => {
          const userData = await authAPI.getUserDetails();

          setUserDetails(userData);
        })()
    }, [])

    return userDetails;
}
