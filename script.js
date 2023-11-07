import { gamepageHTML, createGamesHTML } from "./JS/CreateHTML/gamesHTML.js";
import { createProductHTML, productHTML } from "./JS/CreateHTML/productHTML.js";
import { gameAPI, callAPI, dataAPI, featuredDataAPI } from "./JS/functions/apicall.js";
import { getID } from "./JS/functions/GetID.js";
import { createFeaturedHTML, featuredGameHTML } from "./JS/CreateHTML/featuredHTML.js";
import { createSaleGamesHTML, saleGamesHTML } from "./JS/CreateHTML/frontsaleHTML.js";
import { createNewReleasesHTML, newRealeasesHTML } from "./JS/CreateHTML/newrealeasesHTML.js";

const currentHTML = window.location.pathname; 

if (currentHTML == "/games"){
     createGamesHTML(dataAPI);
}

if (currentHTML == "/gamepage_placeholder.html") {

    const id = getID();
    const parameterID = gameAPI + id;
    const productAPI = await callAPI(parameterID);

    createProductHTML(productAPI);

};

if (currentHTML == "/") {

createSaleGamesHTML(dataAPI);
createFeaturedHTML(featuredDataAPI);
createNewReleasesHTML(dataAPI);

};