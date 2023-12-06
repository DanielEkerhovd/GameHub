import { fetchCartItems } from "./fetchCartItems.js";

const cartDisplay = document.querySelector(".cart-items")
const cartArea = document.getElementById("cart-items");

function checkCart () {
    const currentCart = fetchCartItems();

    const cartAmount = currentCart.length;

    return cartAmount;
}

export function updateCart() {

    const currentCart = checkCart();

    if (currentCart) {
        cartArea.classList.remove("remove");
    }

    cartDisplay.innerHTML = currentCart;

};

