import requester from "./requester";

const BASE_URL = "http://localhost:3030/users"

const register = (email, username, password, profilePic) => requester.post(`${BASE_URL}/register`, {email, username, password, profilePic});

const login = (email, password) => requester.post(`${BASE_URL}/login`, {email, password});

const logout = () => requester.get(`${BASE_URL}/logout`);

const getUser = () => {}


export default {
    login,
    register,
    logout
}