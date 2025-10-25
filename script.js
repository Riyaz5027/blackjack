let firstCard=10
let secondCard=9
let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true

if(sum<21)
{
    console.log("Do you want to draw a new card")
}
else if(sum===21)
{
    hasBlackJack=true
    console.log("WOHOOOOOO! you have got BlackJack")
}
else{
    isAlive=false
    console.log("You are out of the game")
}


if(hasBlackJack)
{
    console.log("You have ge")
}