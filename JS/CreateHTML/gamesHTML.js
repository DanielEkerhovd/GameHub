import { errorMessage } from "../utils/errorHandling.js";
import { fetchCartItems } from "../utils/fetchCartItems.js";
import { updateCart } from "../utils/cartAmount.js";
import { cartAnimation } from "../utils/cartsAnimation.js";

export const gamepageHTML = document.querySelector(".gamespage-content");


export function createGamesHTML(api) {

    try {

    gamepageHTML.innerHTML = "";

    for (let i = 0; i < api.length; i++) {

        let pricing = api[i].prices.price / 100;
        let saleColor = ""

        if (api[i].on_sale) {
            pricing = api[i].prices.sale_price / 100;
            saleColor = "onSale";
        }

        let image = "Icons/close.png"

        if (api[i].images.length >= 1) {;
            image = api[i].images[0].src
        }

        gamepageHTML.innerHTML += `  <div class="gp-games">
                                                <a href="/gamepage_placeholder.html?id=${api[i].id}">
                                                    <img src="${image}" alt="${api[i].name}">
                                                </a>
                                                <div class="gp-button buttonstyle">
                                                    <h2 class="${saleColor}">${pricing}${api[i].prices.currency_symbol}</h2>
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
            cartAnimation();
            console.log("cart");
        }

        console.log(currentCart);
        updateCart();
        
    }



    } catch (error) {
        gamepageHTML.innerHTML = errorMessage("Couldn't load games");
    }

};