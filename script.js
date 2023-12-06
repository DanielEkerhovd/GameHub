import { gamepageHTML, createGamesHTML } from "./JS/CreateHTML/gamesHTML.js";
import { createProductHTML, productHTML } from "./JS/CreateHTML/productHTML.js";
import { gameAPI, callAPI, dataAPI, featuredDataAPI } from "./JS/utils/apicall.js";
import { getID } from "./JS/utils/GetID.js";
import { createFeaturedHTML, featuredGameHTML } from "./JS/CreateHTML/featuredHTML.js";
import { createSaleGamesHTML, saleGamesHTML } from "./JS/CreateHTML/frontsaleHTML.js";
import { createNewReleasesHTML, newRealeasesHTML } from "./JS/CreateHTML/newrealeasesHTML.js";
import { productsInCart } from "./JS/utils/createCartObject.js";
import { createCartHTML } from "./JS/CreateHTML/cartHTML.js";
import { fetchCartItems } from "./JS/utils/fetchCartItems.js";
import { updatePricing } from "./JS/CreateHTML/updatePricing.js";
import { sumTotal } from "./JS/utils/sumTotal.js";
import { checkOut } from "./JS/utils/checkout.js";
import { updateCart } from "./JS/utils/cartAmount.js";

const currentHTML = window.location.pathname; 

const buttons = document.querySelectorAll(".cartbutton");

updateCart();

if (currentHTML == "/games" || currentHTML == "/games.html"){

     createGamesHTML(dataAPI);
     
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

if (currentHTML == "/cart.html" || currentHTML == "/cart") {

    createCartHTML(productsInCart);
    console.log("!!", productsInCart);
    const subTotal = sumTotal(productsInCart).toFixed(2);
    updatePricing(subTotal);
    checkOut();

};
