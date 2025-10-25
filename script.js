let firstCard = 10
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

//alternative to document.getElementByID("sum-el") is
//document.querySelector("#sum-el")

function startGame() {
    document.getElementById("cards-el").textContent="Card: " + " " + firstCard + " " + secondCard
    document.getElementById("sum-el").textContent="Sum: "+sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"
    }
    else if (sum === 21) {
        hasBlackJack = true
        message = "WOHOOOOOO! you have got BlackJack"
    }
    else {
        isAlive = false
        message = "You are out of the game"
    }
    document.getElementById("message-el").textContent=message
    console.log(message)
}