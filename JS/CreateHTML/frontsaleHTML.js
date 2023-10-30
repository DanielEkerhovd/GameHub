export const saleGamesHTML = document.querySelector(".sale-games");

export function createSaleGamesHTML(api) {



  for (let i = 0; i < api.length; i++) {

    if (!api[i].onSale) {
      continue;
    }

    let percentSale = parseInt((api[i].price - api[i].discountedPrice) / api[i].price * 100) + "%"

    console.log(percentSale);

    saleGamesHTML.innerHTML += `
    <div class="sale-game">
      <a href="/gamepage_placeholder.html?id=${api[i].id}">
      <img src="${api[i].image}" alt="${api[i].title}">
        <div class="saletag-homepage">
          <p>${percentSale}</p>
        </div>
      </a> 
    </div>
  `
  }
};