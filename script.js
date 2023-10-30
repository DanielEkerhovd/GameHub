import { gamepageHTML, createGamesHTML } from "./JS/CreateHTML/gamesHTML.js";
import { createProductHTML, productHTML } from "./JS/CreateHTML/productHTML.js";
import { gameAPI, callAPI, dataAPI } from "./JS/functions/apicall.js";
import { getID } from "./JS/functions/GetID.js";
import { createFeaturedHTML, featuredGameHTML } from "./JS/CreateHTML/featuredHTML.js";
import { createSaleGamesHTML, saleGamesHTML } from "./JS/CreateHTML/frontsaleHTML.js";

const currentHTML = window.location.pathname; 

if (currentHTML == "/games.html"){
    createGamesHTML(dataAPI);
}


if (currentHTML == "/gamepage_placeholder.html") {

        const id = getID();
    
        const parameterID = gameAPI + id;
    
        const productAPI = await callAPI(parameterID);
    
        createProductHTML(productAPI);
    
};

if (currentHTML == "/index.html") {

    function saleGames() {

    createSaleGamesHTML(dataAPI);

    };

    

    console.log(saleGamesHTML);

    async function featuredGame() {

        const featuredID = "2bbaab8b-57b0-47f6-ab8d-8d443ac767da";

        const featuredGameAPI = gameAPI + featuredID;

        const featuredGameData = await callAPI(featuredGameAPI);

        createFeaturedHTML(featuredGameData);
    };

    saleGames();
    featuredGame();

};
