export const getAccessToken = () => {
    const authJSON = localStorage.getItem("auth");

    if (!authJSON) {
        return null;
    }

    const authData = JSON.parse(authJSON);

    return authData?.accessToken;
}

export const parseDate = (timestamp) => {
    const date = new Date(timestamp);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
}