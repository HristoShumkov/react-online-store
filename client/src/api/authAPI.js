import requester from "./requester";

const AUTH_URL = "http://localhost:3030/users"

const PUBLIC_USER_URL = "http://localhost:3030/data/users"

const register = (email, username, password, profilePic) => requester.post(`${AUTH_URL}/register`, {email, username, password, profilePic});

const login = (email, password) => requester.post(`${AUTH_URL}/login`, {email, password});

const logout = () => requester.get(`${AUTH_URL}/logout`);

const getUserDetails = () => requester.get(`${AUTH_URL}/me`);

const postPublicUserRecord = (userData) => requester.post(PUBLIC_USER_URL, userData);

const getPublicUserRecord = (userId) => requester.get(`${PUBLIC_USER_URL}/${userId}`);



export default {
    login,
    register,
    logout,
    getUserDetails,
    postPublicUserRecord,
    getPublicUserRecord
}