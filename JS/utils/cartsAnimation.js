const cart = document.getElementById('cart-items');
console.log(cart.innerHTML);

export function cartAnimation() {

    cart.classList.add('cart-items-animation');
    setTimeout(() => {
        cart.classList.remove('cart-items-animation');
    }, 600);

    console.log("animation ran");
}