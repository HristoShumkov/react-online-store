import { createContext, useContext, useState } from "react";

import { useGetSingleItem } from "../hooks/useItems"
import usePersistedState from "../hooks/usePersistedState";
import itemAPI from "../api/itemAPI";

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

    const isOwner = (id) => {
        return id === authState._id
    }

    const isItemOwner = (itemId) => {
        const [item] = useGetSingleItem(itemId);

        return isOwner(item._ownerId);
    }

    

    const contextData = {
        userId: authState?._id,
        email: authState?.email,
        profilePic: authState?.profilePic,
        createdOn: authState?._createdOn,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        localLogout,
        isOwner,
        isItemOwner
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