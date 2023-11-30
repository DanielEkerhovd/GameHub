import { errorMessage } from "../utils/errorHandling.js";
export const featuredGameHTML = document.querySelector(".featured-content");


export function createFeaturedHTML(api) {

    try {

    featuredGameHTML.innerHTML = "";

    let pricing = api.price;
    let saleColor = "";

    if (api.onSale) {
        pricing = api.discountedPrice
        saleColor = "onSale";
    }

    featuredGameHTML.innerHTML += `
    <div class="featured-game gamecover-unit">
            <div class="gamecover">
                <a href="/gamepage_placeholder.html?id=${api.id}"><img src="${api.image}" alt="${api.title}" class="featured-gamecover"></a>
                <div class="featured-button buttonstyle">
                <h2 class="${saleColor}">${pricing}$</h2>
                <button>Add to cart</button>
                </div>
            </div>
            <div class="featured-game-text gamecover-text">
              <h1>${api.title.toUpperCase()}</h1>
              <p>${api.description}</p>
              <img class="video-placeholder" src="images/video-placeholder.png" alt="video player">
            </div> 
    </div> 
    `
    } catch (error) {
        featuredGameHTML.innerHTML = errorMessage();
    }
};
















          