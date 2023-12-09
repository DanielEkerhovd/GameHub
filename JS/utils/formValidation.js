import { emptyCart } from "./emptyCart.js";
const errorMessage = document.querySelector(".error-message-pay");
const errorIcon = document.getElementById("error-icon");

const paymentForm = document.getElementById("payment")
const cardNumbers = document.getElementById("card");   
const cardHolder = document.getElementById("cardholder");
const month = document.getElementById("mm");
const year = document.getElementById("yy");
const cvc = document.getElementById("cvc");

paymentForm.addEventListener("submit", checkForm);   

function checkForm(event) {

    document.querySelectorAll(".error-border").forEach((elem) => elem.classList.remove("error-border"));
    errorIcon.classList.add("remove")

    let cardNumbersLength = cardNumbers.value.split(" ").join("").length;

    let errorText = []
    let errorStatus = false;
    errorMessage.innerHTML = "";

    if ( cardNumbersLength < 8) {

        cardNumbers.classList.add("error-border")
        errorIcon.classList.remove("remove")
        errorText.push("Invalid Card number")

        errorStatus = true;
        // event.preventDefault();
    }

    if (month.value > 12 || month.value < 1 || month.value.length != 2) {

        month.classList.add("error-border")
        errorIcon.classList.remove("remove")
        errorText.push("Invalid month")

        errorStatus = true;
        // event.preventDefault();
    }

    if (year.value < 23 || year.value.length !=2) {

        year.classList.add("error-border")
        errorIcon.classList.remove("remove")
        errorText.push("Invalid year")

        errorStatus = true;
        // event.preventDefault();
    }

    if (cvc.value.length != 3) {

        cvc.classList.add("error-border")
        errorIcon.classList.remove("remove")
        errorText.push("Invalid CVC")

        errorStatus = true;
        // event.preventDefault();
    }

    if (errorStatus) {
        errorMessage.innerText = errorText[0];
        event.preventDefault()
    } else {
        emptyCart();
    }
    
}