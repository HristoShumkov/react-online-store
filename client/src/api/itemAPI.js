import requester from "./requester";

const BASE_URL = "http://localhost:3030/data";

const getAllItems = async () => requester.get(`${BASE_URL}/items`);

const getSingleItem = async (itemId) => requester.get(`${BASE_URL}/items/${itemId}`)

const postItem = (itemData) => requester.post(`${BASE_URL}/items`, itemData);

const updateItem = (itemData, itemId) => requester.put(`${BASE_URL}/items/${itemId}`, itemData);

const deleteItem = (itemId) => requester.del(`${BASE_URL}/items/${itemId}`);

const getCartItems = (userId) => requester.get(`${BASE_URL}/cart?where=user%3D%22${userId}%22`);

const getSingleCartItem = (userId, itemId) => requester.get(`${BASE_URL}/cart?where=user%3D%22${userId}%22%20AND%20item%3D%22${itemId}%22`);

const addToCart = (userId, itemId) => requester.post(`${BASE_URL}/cart`, {user: userId, item: itemId});


export default {
    getAllItems,
    getSingleItem,
    postItem,
    updateItem,
    deleteItem,
    getCartItems,
    getSingleCartItem,
    addToCart
}