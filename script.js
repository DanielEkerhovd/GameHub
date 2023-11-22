import { gamepageHTML, createGamesHTML } from "./JS/CreateHTML/gamesHTML.js";
import { createProductHTML, productHTML } from "./JS/CreateHTML/productHTML.js";
import { gameAPI, callAPI, dataAPI, featuredDataAPI } from "./JS/utils/apicall.js";
import { getID } from "./JS/utils/GetID.js";
import { createFeaturedHTML, featuredGameHTML } from "./JS/CreateHTML/featuredHTML.js";
import { createSaleGamesHTML, saleGamesHTML } from "./JS/CreateHTML/frontsaleHTML.js";
import { createNewReleasesHTML, newRealeasesHTML } from "./JS/CreateHTML/newrealeasesHTML.js";

const currentHTML = window.location.pathname; 

const buttons = document.querySelectorAll(".cartbutton");

if (currentHTML == "/games" || currentHTML == "/games.html"){
     createGamesHTML(dataAPI);

    //  const cartButtons = document.querySelectorAll("#addCart");

    //  cartButtons.forEach((button) => {
    //     button.addEventListener("click", addToLocalStorage);
    //  });

    // function addToLocalStorage() {
        
    // }
     
};

if (currentHTML == "/gamepage_placeholder.html") {

    const id = getID();
    const parameterID = gameAPI + id;
    const productAPI = await callAPI(parameterID);

    createProductHTML(productAPI);

};

if (currentHTML == "/" || currentHTML == "/index.html") {

createSaleGamesHTML(dataAPI);
createFeaturedHTML(featuredDataAPI);
createNewReleasesHTML(dataAPI);

};

