export const gameAPI = "https://api.noroff.dev/api/v1/gamehub/";

// Function to call the Gamehub API
export async function callAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const dataAPI = await callAPI(gameAPI);

