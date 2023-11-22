const scrollingImagesSale = document.querySelector(".scrolling-images-sale");
const scrollingImagesRelease = document.querySelector(".scrolling-images-release");
const buttonLeftSale = document.querySelector(".button-left-sale");
const buttonRightSale = document.querySelector(".button-right-sale");
const buttonLeftRelease = document.querySelector(".button-left-release");
const buttonRightRelease = document.querySelector(".button-right-release");

// function checkScroll() {
//     const currentScroll = scrollingImages.scrollLeft;
//     console.log(currentScroll);
//     if (currentScroll === 0) {
//         // buttonLeft.setAttribute("disabled", "true");
//         // buttonLeft.style.display = "none";
//     }
//     if (!currentScroll === 0) {
//         buttonLeft.removeAttribute("disabled", "false");
//         buttonLeft.style.display = "block";
//     }
// }

function leftScrollSale() {

    scrollingImagesSale.scrollBy({
        left: -480,
        behavior: "smooth"
    });
    // checkScroll();
};

function rightScrollSale() {
    
    scrollingImagesSale.scrollBy({
        left: 480,
        behavior: "smooth"
    });
    // checkScroll();
};

function leftScrollRelease() {

    scrollingImagesRelease.scrollBy({
        left: -480,
        behavior: "smooth"
    });
    // checkScroll();
};

function rightScrollRelease() {
    
    scrollingImagesRelease.scrollBy({
        left: 480,
        behavior: "smooth"
    });
    // checkScroll();
};



buttonLeftSale.addEventListener("click", leftScrollSale);
buttonRightSale.addEventListener("click", rightScrollSale);
buttonLeftRelease.addEventListener("click", leftScrollRelease);
buttonRightRelease.addEventListener("click", rightScrollRelease);