import requester from "./requester";

const BASE_URL = "http://localhost:3030/data/items";

const getAllItems = async () => {
    const response = await requester.get(BASE_URL);

    const items = Object.values(response);

    return items;
}

const getSingleItem = async (itemId) => requester.get(`${BASE_URL}/${itemId}`)


const postItem = (itemData) => requester.post(BASE_URL, itemData);

export default {
    getAllItems,
    getSingleItem,
    postItem
}