let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let cards=[firstCard,secondCard]

//alternative to document.getElementByID("sum-el") is
//document.querySelector("#sum-el")



function startGame() {
    renderGame()
}
function renderGame() {
    for(let i=0;i<cards.length;i++)
    {
        document.getElementById("cards-el").textContent+=cards[i]+" "
    }
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

function newCard(){
    let card = 7
    sum += card
    renderGame()
}