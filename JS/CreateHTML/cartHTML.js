import { errorMessage } from "../utils/errorHandling.js";
import { fetchCartItems } from "../utils/fetchCartItems.js";

export const cartHTML = document.querySelector(".cart-inventory");

const fetchCart = fetchCartItems();


export function createCartHTML(api) {

    try {

    cartHTML.innerHTML = "<h1>CART</h1>";

    if (fetchCart.length === 0) {

            console.log("Nothing here");
            cartHTML.innerHTML += `
            <p>Nothing here yet!</p>`
    };

    for (let i = 0; i < api.length; i++) {

        

        let pricing = api[i].price

        if (api[i].onSale) {
            pricing = api[i].discountedPrice
        }
        
        cartHTML.innerHTML += `  <div class="cart-games">
                                        <img src="${api[i].image}" alt="${api[i].title}">
                                        <div class="cart-text">
                                        <p>${api[i].title.toUpperCase()}</p>
                                        <p>${pricing}</p>
                                        <div class="remove-button"><button><i class="fa-regular fa-square-minus fa-xl" style="color: #ffffff;"></i></button></div>
                                        </div>
                                    </div>`
    }

    

    } catch (error) {
        cartHTML.innerHTML = errorMessage("Couldn't load games");
    }

};