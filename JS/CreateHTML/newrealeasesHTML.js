import { errorMessage } from "../utils/errorHandling.js";
export const newRealeasesHTML = document.querySelector(".new-games");

export function createNewReleasesHTML(api) {

  try {

    newRealeasesHTML.innerHTML = ""

    for (let i = 0; i < api.length; i++) {

        //Removes items realeased before 2008
        let newReleaseCap = "2007"

        if (api[i].released <= newReleaseCap) {
          continue;
        }

        newRealeasesHTML.innerHTML += `
        <a href="/gamepage_placeholder.html?id=${api[i].id}">
            <img src="${api[i].image}" alt="${api[i].title}">
        </a>
      `
      } 
    } catch (error) {
      newRealeasesHTML.innerHTML = errorMessage();
  }
};