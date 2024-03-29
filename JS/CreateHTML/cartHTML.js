import { errorMessage } from "../utils/errorHandling.js";
import { fetchCartItems } from "../utils/fetchCartItems.js";
import { productsInCart } from "../utils/createCartObject.js";

export const cartHTML = document.querySelector(".cart-inventory");

const fetchCart = fetchCartItems();

export function createCartHTML(api) {

    try {

    cartHTML.innerHTML = "<h1>CART</h1>";

    if (fetchCart.length === 0) {

        cartHTML.innerHTML += `
        <p>Nothing here yet!</p>
        <a href="/games.html">Browse games</a>`

        document.getElementById("checkoutButton").disabled = true;
    };

    for (let i = 0; i < api.length; i++) {

        let pricing = api[i].prices.regular_price / 100;

        if (api[i].onSale) {
          pricing = api[i].prices.sale_price / 100;
        }

        let image = "Icons/close.png"
        
        if (api[i].images.length >= 1) {;
            image = api[i].images[0].src
        }
        
        cartHTML.innerHTML += `  <div class="cart-games">
                                        <img src="${image}" alt="${api[i].name}">
                                        <div class="cart-text">
                                        <p>${api[i].name.toUpperCase()}</p>
                                        <p>${pricing}$</p>
                                        <div class="remove-button"><i class="fa-regular fa-square-minus fa-xl" data-id="${api[i].id}" style="color: #ffffff;"></i></div>
                                        </div>
                                    </div>`
    }

    const removeCartButtons = document.querySelectorAll(".remove-button i");

    removeCartButtons.forEach((button) => {
        button.addEventListener("click", removeFromCart);
    });

    function removeFromCart() {

        let item = this.dataset.id;
        console.log(item);
        let currentCart = fetchCartItems();

        console.log(currentCart);

        const productIsInCart = currentCart.find((element) => {
            return element === item;
        });

        console.log(productIsInCart);

        if (productIsInCart === item) {
            console.log("works");
            let newCart = currentCart.filter((element) => element != productIsInCart);
            console.log(newCart);
            localStorage.setItem("products", JSON.stringify(newCart));
            location.reload();

        }
    };


    } catch (error) {
        cartHTML.innerHTML = errorMessage("Couldn't load games");
    }

};