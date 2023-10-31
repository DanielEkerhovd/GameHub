export const gameAPI = "https://api.noroff.dev/api/v1/gamehub/";

const featuredID = "2bbaab8b-57b0-47f6-ab8d-8d443ac767da";

// Function to call the Gamehub API
export async function callAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const featuredGameAPI = gameAPI + featuredID;

export const featuredDataAPI = await callAPI(featuredGameAPI);

export const dataAPI = await callAPI(gameAPI);