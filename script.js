const gamepageContentHTML = document.querySelector(".gamespage-content");
const gameAPI = "https://api.noroff.dev/api/v1/gamehub";


async function fetchGames() {

    const response = await fetch(gameAPI);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {

        let pricing = data[i].price
        let saleColor = ""

        if (data[i].onSale) {
            pricing = data[i].discountedPrice
            saleColor = "onSale";
        }

        gamepageContentHTML.innerHTML += `  <div class="gp-games">
                                                <a href="gamepage_placeholder.html">
                                                    <img src="${data[i].image}" alt="${data[i].title}">
                                                </a>
                                                <div class="gp-button buttonstyle">
                                                    <h2 class="${saleColor}">${pricing}$</h2>
                                                    <button>Add to cart</button>
                                                </div>
                                            </div>`
    }

    gamepageContentHTML.innerHTML += `<div class="gp-moregames">
    <p>More games comming soon</p>
    </div>
    <div class="gp-placeholder">
    </div>`
}

fetchGames();
