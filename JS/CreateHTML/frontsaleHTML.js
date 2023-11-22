import { errorMessage } from "../utils/errorHandling.js";

export const mainContentBox = document.querySelector(".main-content-box");
export const saleGamesHTML = document.querySelector(".sale-games");

export function createSaleGamesHTML(api) {

  try {
  
  saleGamesHTML.innerHTML = "";

  for (let i = 0; i < api.length; i++) {

    if (!api[i].onSale) {
      continue;
    }

    let percentSale = parseInt((api[i].price - api[i].discountedPrice) / api[i].price * 100) + "%";

    saleGamesHTML.innerHTML += `
    
    
    <div class="sale-game scrolling-images">
      <a href="/gamepage_placeholder.html?id=${api[i].id}">
      <img src="${api[i].image}" alt="${api[i].title}">
        <div class="saletag-homepage">
          <p>${percentSale}</p>
        </div>
      </a> 
    </div>
  `
  }
  } catch (error) {
    saleGamesHTML.innerHTML = errorMessage("Error: Couldn't load discounted games");
  }
};