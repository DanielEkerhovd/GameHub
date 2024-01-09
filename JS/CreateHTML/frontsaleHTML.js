import { errorMessage } from "../utils/errorHandling.js";

export const mainContentBox = document.querySelector(".main-content-box");
export const saleGamesHTML = document.querySelector(".sale-games");

export function createSaleGamesHTML(api) {

  try {
  
  saleGamesHTML.innerHTML = "";

  for (let i = 0; i < api.length; i++) {

    if (!api[i].on_sale) {
      continue;
    }

    let percentSale = parseInt((api[i].prices.regular_price - api[i].prices.sale_price) / api[i].prices.regular_price * 100) + "%";
    let image = "Icons/close.png"
        
        if (api[i].images.length >= 1) {;
            image = api[i].images[0].src
        }

    saleGamesHTML.innerHTML += `
    
    
    <div class="sale-game scrolling-images">
      <a href="/gamepage_placeholder.html?id=${api[i].id}">
      <img src="${image}" alt="${api[i].title}">
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