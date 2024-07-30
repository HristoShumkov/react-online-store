import { createContext, useContext } from "react";

import { useGetSingleItem } from "../hooks/useItems"
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext({
    userId: "",
    username: "",
    email: "",
    profilePic: "",
    accessToken: "",
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    isOwner: () => null,
    localLogout: () => null
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState("auth", {});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const localLogout = () => {
        setAuthState(null);
    }


    const isOwner = (itemId) => {
        const [item] = useGetSingleItem(itemId);

        return item._ownerId === authState._id;
    }

    const contextData = {
        userId: authState?._id,
        email: authState?.email,
        profilePic: authState?.profilePic,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        localLogout,
        isOwner
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}