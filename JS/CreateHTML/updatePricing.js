import { sumTotal } from "../utils/sumTotal.js";
import { productsInCart } from "../utils/createCartObject.js";

const cartPricing = document.querySelector(".total-pricing");


// const testing = [
//     {
//         pricing: 12.99,
//         onSale: true,
//         discountedPrice: 5.99
    
//     },
//     {
//         pricing: 18.99,
//         onSale: true,
//         discountedPrice: 5.99
    
//     },
//     {
//         pricing: 9.99,
//         onSale: true,
//         discountedPrice: 5.99
    
//     },
//     ];

const newTotal = sumTotal(productsInCart)

export function updatePricing(price) {
    cartPricing.innerHTML = price + "$";
};