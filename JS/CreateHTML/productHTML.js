import { errorMessage } from "../utils/errorHandling.js";

export const productHTML = document.querySelector(".cover-page");

export function createProductHTML(api) {

  try {

  document.title = `GameHub - ${api.name}`;

  productHTML.innerHTML = "";

  let pricing = api.prices.regular_price / 100;
  let saleColor = ""

  if (api.on_sale) {
      pricing = api.prices.sale_price / 100;
      saleColor = "onSale";
  }

  let image = "Icons/close.png"
  console.log(api.images);
        
  if (api.images.length >= 1) {;
      image = api.images[0].src
  }


  productHTML.innerHTML += `
  <div class="gamecover">
          <img src="${image}" alt="${api.name.toUpperCase()}" class="game-gamecover">
          <div class="game-button buttonstyle">
          <h2 class="${saleColor}">${pricing}$</h2>
          <button>Add to cart</button>
          </div>
      </div>
      <div class="game-text gamecover-text">
        <h1>${api.name}</h1>
        <p>${api.description}</p>
        <img class="video-placeholder" src="images/video-placeholder.png" alt="video player">
      </div>
  `

  } catch (error) {
    productHTML.innerHTML = errorMessage("Couldn't load product");
  }
};