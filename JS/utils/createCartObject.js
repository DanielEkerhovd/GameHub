import { gameAPI, callAPI } from "./apicall.js";
import { fetchCartItems } from "./fetchCartItems.js";

const currentCart = fetchCartItems();

async function createCartObject(array) {

    let cartProducts = [];

    for (let i = 0; i < array.length; i++) {

        const productAPI = gameAPI + array[i];
        const cartProduct = await callAPI(productAPI);
        cartProducts.push(cartProduct)
    }

    return cartProducts;
}

export const productsInCart = await createCartObject(currentCart);