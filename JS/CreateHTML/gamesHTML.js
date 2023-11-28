import { errorMessage } from "../utils/errorHandling.js";
import { fetchCartItems } from "../utils/fetchCartItems.js";

export const gamepageHTML = document.querySelector(".gamespage-content");

export function createGamesHTML(api) {

    try {

    gamepageHTML.innerHTML = "";

    for (let i = 0; i < api.length; i++) {

        let pricing = api[i].price
        let saleColor = ""

        if (api[i].onSale) {
            pricing = api[i].discountedPrice
            saleColor = "onSale";
        }



        gamepageHTML.innerHTML += `  <div class="gp-games">
                                                <a href="/gamepage_placeholder.html?id=${api[i].id}">
                                                    <img src="${api[i].image}" alt="${api[i].title}">
                                                </a>
                                                <div class="gp-button buttonstyle">
                                                    <h2 class="${saleColor}">${pricing}$</h2>
                                                    <button type="button" class="cartButton" data-id="${api[i].id}">Add to cart</button>
                                                </div>
                                            </div>`
    }

    gamepageHTML.innerHTML += `<div class="gp-moregames">
    <p>More games comming soon</p>
    </div>
    <div class="gp-placeholder">
    </div>`


    const cartButtons = document.querySelectorAll(".gp-button button");


    cartButtons.forEach((button) => {
        button.addEventListener("click", addToCart);
    });

    function addToCart() {

        let name = this.dataset.id;
        let currentCart = fetchCartItems()
        
        const productIsInCart = currentCart.find((element) => {
            return element === name;
        });

        if (productIsInCart === undefined) {
            currentCart.push(name);
            localStorage.setItem("products", JSON.stringify(currentCart));
        }

        console.log(currentCart);
        
    }



    } catch (error) {
        gamepageHTML.innerHTML = errorMessage("Couldn't load games");
    }

};