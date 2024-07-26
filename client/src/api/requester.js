async function requester(method, url, data) {
    const options = {};

    const accessToken = localStorage.getItem("accessToken");

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

export const request = {
    get: () => requester.bind(null, "GET"),
    post: () => requester.bind(null, "POST"),
    put: () => requester.bind(null, "PUT"),
    del: () => requester.bind(null, "DELETE"),
}
