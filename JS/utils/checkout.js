import { emptyCart } from "./emptyCart.js";


export function checkOut() {
    const checkOutButton = document.querySelector(".checkout-button");
    checkOutButton.addEventListener("click", emptyCart);
};
