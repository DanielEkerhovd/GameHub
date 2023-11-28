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
}

function fetchCartItems() {
    const localCartItems = localStorage.getItem("products");

    if (localCartItems === null) {
        return [];
    }

    else {
        return JSON.parse(localCartItems);
    }
};