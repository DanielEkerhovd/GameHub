export const productHTML = document.querySelector(".cover-page");

export function createProductHTML(api) {

  productHTML.innerHTML = "";

  let pricing = api.price
  let saleColor = ""

  if (api.onSale) {
      pricing = api.discountedPrice
      saleColor = "onSale";
  }

    productHTML.innerHTML += `
    <div class="gamecover">
            <img src="${api.image}" alt="${api.title}" class="game-gamecover">
            <div class="game-button buttonstyle">
            <h2 class="${saleColor}">${pricing}$</h2>
            <button>Add to cart</button>
            </div>
        </div>
        <div class="game-text gamecover-text">
          <h1>${api.title}</h1>
          <p>${api.description}</p>
          <img class="video-placeholder" src="images/video-placeholder.png" alt="video player">
        </div>
    `
};