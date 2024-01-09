import { errorMessage } from "../utils/errorHandling.js";
export const newRealeasesHTML = document.querySelector(".new-games");

export function createNewReleasesHTML(api) {

  try {

    newRealeasesHTML.innerHTML = ""

    for (let i = 0; i < api.length; i++) {

        //Removes items realeased before 2008
        // let newReleaseCap = "2007"

        // if (api[i].released <= newReleaseCap) {
        //   continue;
        // }

        let image = "Icons/close.png"
        
        if (api[i].images.length >= 1) {;
            image = api[i].images[0].src
        }

        newRealeasesHTML.innerHTML += `
        <div class="new-game">
          <a href="/gamepage_placeholder.html?id=${api[i].id}">
              <img src="${image}" alt="${api[i].title}">
          </a>
        </div>
      `
      };
      
    } catch (error) {
      newRealeasesHTML.innerHTML = errorMessage();
  }
};