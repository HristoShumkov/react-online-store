import requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/items";

const getAllItems = async () => {
    const response = await requester.get(BASE_URL);

    const items = Object.values(response);

    return items;
}

export default {
    getAllItems
}