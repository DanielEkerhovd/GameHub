import { errorMessage } from "../utils/errorHandling.js";
export const featuredGameHTML = document.querySelector(".featured-content");


export function createFeaturedHTML(api) {

    try {

    featuredGameHTML.innerHTML = "";

    

    let pricing = api.prices.regular_price / 100;
    let saleColor = "";

    if (api.on_sale) {
        pricing = api.prices.sale_price / 100;
        saleColor = "onSale";
    }

    let image = "Icons/close.png"
        
        if (api.images.length >= 1) {;
            image = api.images[0].src
        }

    featuredGameHTML.innerHTML += `
    <div class="featured-game gamecover-unit">
            <div class="gamecover">
                <a href="/gamepage_placeholder.html?id=${api.id}"><img src="${image}" alt="${api.title}" class="featured-gamecover"></a>
                <div class="featured-button buttonstyle">
                <h2 class="${saleColor}">${pricing}$</h2>
                <button>Add to cart</button>
                </div>
            </div>
            <div class="featured-game-text gamecover-text">
            <h1>${api.name.toUpperCase()}</h1>
                <p>${api.description}</p>
              <img class="video-placeholder" src="images/video-placeholder.png" alt="video player">
            </div> 
    </div> 
    `
    } catch (error) {
        featuredGameHTML.innerHTML = errorMessage();
    }
};
















          