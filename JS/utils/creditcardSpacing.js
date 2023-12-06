const cardNumbers = document.getElementById("card");

cardNumbers.onkeydown = function cardSpacing() {
    if (cardNumbers.value.length > 0) {

        if (cardNumbers.value.length % 4 == 0) {
            cardNumbers.value += "    ";
        }
    }
}
