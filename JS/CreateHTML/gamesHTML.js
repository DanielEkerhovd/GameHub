export const gamepageHTML = document.querySelector(".gamespage-content");

export function createGamesHTML(api) {

    gamepageHTML.innerHTML = "";

    for (let i = 0; i < api.length; i++) {

        let pricing = api[i].price
        let saleColor = ""

        if (api[i].onSale) {
            pricing = api[i].discountedPrice
            saleColor = "onSale";
        }

        gamepageHTML.innerHTML += `  <div class="gp-games">
                                                <a href="/gamepage_placeholder.html?id=${api[i].id}">
                                                    <img src="${api[i].image}" alt="${api[i].title}">
                                                </a>
                                                <div class="gp-button buttonstyle">
                                                    <h2 class="${saleColor}">${pricing}$</h2>
                                                    <button>Add to cart</button>
                                                </div>
                                            </div>`
    }

    gamepageHTML.innerHTML += `<div class="gp-moregames">
    <p>More games comming soon</p>
    </div>
    <div class="gp-placeholder">
    </div>`
}