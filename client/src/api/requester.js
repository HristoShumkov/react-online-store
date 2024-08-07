import { getAccessToken } from "../utils/authUtils";

async function requester(method, url, data) {
    const options = {};

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers = {
            ...options.headers,
            "X-Authorization": accessToken
        }
    }

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers = {
            ...options.headers,
            "Content-Type": "application/json"
        }

        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        if (response === 204) {
            return {};
        }

        const result = await response.json();

        if (!response.ok) {
            throw result.message;
        }

        return result;
    } catch (err) {
        console.error(err.message);
    }
}

const get = requester.bind(null, "GET");
const post = requester.bind(null, "POST");
const put = requester.bind(null, "PUT");
const del = requester.bind(null, "DELETE");

export default {
    get,
    post,
    put,
    del
}
