export function fetchCartItems() {
    const localCartItems = localStorage.getItem("products");

    if (localCartItems === null) {
        return [];
    }

    else {
        return JSON.parse(localCartItems);
    }
};